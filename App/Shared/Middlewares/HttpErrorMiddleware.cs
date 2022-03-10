using System;
using System.Net;
using System.Net.Mime;
using System.Text.Json;

namespace App.Shared.Middlewares;

public class HttpErrorMiddleware
{
    private readonly RequestDelegate _next;

    public HttpErrorMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(context, ex);
        }
    }

    private static Task HandleExceptionAsync(HttpContext context, Exception ex)
    {
        const HttpStatusCode code = HttpStatusCode.InternalServerError;
        var response = new
        {
            message = ex.Message,
            code = ex.HResult,
            error = ex.TargetSite?.Name
        };

        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)code;

        return context.Response.WriteAsync(JsonSerializer.Serialize(response));
    }
}