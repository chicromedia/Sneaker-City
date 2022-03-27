using System.Text;

namespace App.Shared.Utils;

public abstract class GuidGenerator
{
    private static readonly Random Random = new();

    public static string? NewOrderId(int size = 15)
    {
        var builder = new StringBuilder(size);
        for (var i = 0; i < size; i++)
        {
            builder.Append((char)Random.Next('A', 'A' + 26));
        }

        var orderId = builder.ToString();
        return $"REF{orderId}";
    }
}