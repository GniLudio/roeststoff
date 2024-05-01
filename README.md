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
            <episodeID>number</episodeID>
            ?<episodeType>full|bonus|trailer</episodeType>
            ?<episodeTime>hours:minutes:seconds</episodeTime>
        </appearance>
    </appearances>
</person>
```

### Trinkstoff (drinks.xml)
```xml
*<drink>
    <name>string</name>
    ?<price>string</price>
    ?<description>string<description>
    ?<image>string</image>
    ?<appearances>
        *<appearance>
            <episodeID>number</episodeID>
            ?<episodeType>full|bonus|trailer</episodeType>
            ?<episodeTime>hours:minutes:seconds</episodeTime>
        </appearance>
    </appearances>
</drink>
```

### Böst-Ofs (boestof.xml)
```xml
*<boestof>
    <name>string</name>
    <episodeID>number</episodeID>
    ?<episodeType>full|bonus|trailer</episodeType>
    ?<episodeTime>hours:minutes:seconds</episodeTime>
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
    <team>
        *<member>string</member>
    </team>
    ?<appearances>
        *<appearance>
            <episodeID>number</episodeID>
            ?<episodeType>full|bonus|trailer</episodeType>
            ?<episodeTime>hours:minutes:seconds</episodeTime>
        </appearance>
    </appearances>
</restaurant>
```

### Sponsoren (sponsors.xml)
```xml
<sponsor>
    <name>string</name>
    <image>string</image>
    ?<appearances>
        *<appearance>
            <episodeID>number</episodeID>
            ?<episodeType>full|bonus|trailer</episodeType>
            ?<episodeTime>hours:minutes:seconds</episodeTime>
        </appearance>
    </appearances>
</sponsor>
```

### Lehrstoff (glossary.xml)
```xml
*<entry>
    <name>string</name>
    <description>string</description>
    <episodeID>number</episodeID>
    ?<episodeType>full|bonus|trailer</episodeType>
    ?<episodeTime>hours:minutes:seconds</episodeTime>
</entry>
```

### Sonstiges (misc.xml)
```xml
*<entry>
    <name>string</name>
    <description>string</description>
    ?<image>string</image>
</entry>
```

## TODOs
* Bilder für Folgen