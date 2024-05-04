# Röststoff Wiki
> Wiki-Webseite über den Röststoff Podcast.

## Daten
> XML-Dateien im `data`-Ordner.

### Syntax
* Element kann mehrmals verwendet werden: `*<tag>`
* Element ist optional: `?<tag>`

### Folgen (episodes.xml)
> [RSS](https://feeds.megaphone.fm/TWG3193347111)

### Stoffies / Personen (people.xml)
```xml
*<person>
    <name>string</name>
    <description>string</description>
    <image>string</image>
    ?<isHost>true|false</isHost>
    ?<appearances>
        *<appearance>
            <episode>number</episode>
            ?<episodeType>full|bonus|trailer</episodeType>
            <episodeTime>hours:minutes:seconds</episodeTime>
        </appearance>
    </appearances>
    ?<characteristics>
        *<characteristic>
            <description>string</description>
            <episode>number</episode>
            ?<episodeType>full|bonus|trailer</episodeType>
            <episodeTime>hours:minutes:seconds</episodeTime>
        </characteristics>
    </characteristics>
</person>
```

### Trinkstoff (drinks.xml)
```xml
*<drink>
    <name>string</name>
    <description>string<description>
    <price>string</price>
    <image>string</image>
    ?<appearances>
        *<appearance>
            <episode>number</episode>
            ?<episodeType>full|bonus|trailer</episodeType>
            <episodeTime>hours:minutes:seconds</episodeTime>
        </appearance>
    </appearances>
</drink>
```

### Böst-Ofs (boestof.xml)
```xml
*<boestof>
    <name>string</name>
    <episode>number</episode>
    ?<episodeType>full|bonus|trailer</episodeType>
    <episodeTime>hours:minutes:seconds</episodeTime>
    <peter>
        *<rank>string</rank>
    </peter>
    <ilona>
        *<rank>string</rank>
    </ilona>
</boestof>
```

### Restaurants (restaurants.xml)
```xml
*<restaurant>
    <name>string</name>
    <description>string</description>
    <image>string</image>
    ?<team>
        *<member>string</member>
    </team>
    ?<appearances>
        *<appearance>
            <episode>number</episode>
            ?<episodeType>full|bonus|trailer</episodeType>
            <episodeTime>hours:minutes:seconds</episodeTime>
        </appearance>
    </appearances>
    ?<characteristics>
        *<characteristic>
            <description>string</description>
            <episode>number</episode>
            ?<episodeType>full|bonus|trailer</episodeType>
            <episodeTime>hours:minutes:seconds</episodeTime>
        </characteristics>
    </characteristics>
</restaurant>
```

### Sponsoren (sponsors.xml)
```xml
*<sponsor>
    <name>string</name>
    <image>string</image>
    ?<appearances>
        *<appearance>
            <episode>number</episode>
            ?<episodeType>full|bonus|trailer</episodeType>
            <episodeTime>hours:minutes:seconds</episodeTime>
        </appearance>
    </appearances>
</sponsor>
```

### Lehrstoff (glossary.xml)
```xml
*<entry>
    <name>string</name>
    <description>string</description>
    <episode>number</episode>
    ?<episodeType>full|bonus|trailer</episodeType>
    <episodeTime>hours:minutes:seconds</episodeTime>
</entry>
```

### Sonstiges (misc.xml)
```xml
*<entry>
    <name>string</name>
    <description>string</description>
    ?<image>string</image>
    <episode>number</episode>
    ?<episodeType>full|bonus|trailer</episodeType>
    <episodeTime>hours:minutes:seconds</episodeTime>
</entry>
```

## TODOs
* Bilder für Folgen