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
    ?<hateQuestion>
        <description>string</description>
        <episode>number</episode>
        ?<episodeType>full|bonus|trailer</episodeType>
        <episodeTime>hours:minutes:seconds</episodeTime>
    </hateQuestion>
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
        </characteristic>
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

### Böst of (boestof.xml)
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
        </characteristic>
    </characteristics>
</restaurant>
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

### Sprüche (sayings.xml)
```xml
*<saying>
    <description>string</description>
    <episode>number</episode>
    ?<episodeType>full|bonus|trailer</episodeType>
    <episodeTime>hours:minutes:seconds</episodeTime>
</saying>
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

## Anmerkungen
Timestamps können nur ungenau sein, da Werbung dynamisch in die Folgen eingebunden werden.

## TODOs
* Bilder für Folgen
* Sprüche-Tab
* Inhalte nach Zeitpunkt sortieren (nicht nur nach Folge)