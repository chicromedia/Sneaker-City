using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.ValueGeneration;

namespace App.Shared.Db;

public class FriendlyUrlGenerator : ValueGenerator<string>
{
    public override bool GeneratesTemporaryValues => false;
    private const string MatchToField = "Name";

    public override string Next(EntityEntry entry)
    {
        var propertyEntry = entry.Property(MatchToField);
        if (propertyEntry == null)
            throw new ArgumentNullException(nameof(entry));

        var value = propertyEntry.OriginalValue?.ToString();

        return !string.IsNullOrEmpty(value)
            ? Regex.Replace(value.Replace(" ", "-"),
                    "([a-z])([A-Z])",
                    "$1-$2",
                    RegexOptions.CultureInvariant,
                    TimeSpan.FromMilliseconds(100))
                .ToLowerInvariant()
            : "";
    }
}