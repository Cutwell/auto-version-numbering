# Automatic Version Numbering
 NodeJS API service for generating version number `.svg` images for GitHub projects.

 <img src="https://auto-version-numbering.vercel.app/api/Cutwell/auto-version-numbering?color=d5008f" width=40>

## Routing
```mermaid
graph LR
    A["https://auto-version-numbering.vercel.app"] -->|Route| B["/api"]
    A --> C["/preview"]
    B -->|GitHub Username| D["/:user"]
    C --> D
    D -- Github Repository --> E["/:projectName"]
    E -- Optional Parameters --> F["?color=:hexcode"]
```

|`https://auto-version-numbering.vercel.app`|`/api` OR `/preview`|`/:user`|`/:projectName`|`?color=:hexcode`|
|:---:|:---:|:---:|:---:|:---:|
|Host domain|Use `/api` for use-cases, `/preview` is a HTML webpage previewing the `/api` `.svg` response.|The target GitHub repository owner username|The target GitHub repository name|Hexcode to customise the color of the image (optional, default `d5008f`)|
