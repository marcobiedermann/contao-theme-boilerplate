# Contao CMS Theme Boilerplate

Modular [Contao CMS](https://contao.org/) theme boilerplate with some basic styles in [Scss](http://sass-lang.com/) to get you right started.

## Compatible
Compatible Version: [Contao 3.5.13](https://download.contao.org/3.5.13/zip)

## Installation

Copy all files to your Contao root folder.

### Folders

Rename the following folders to your THEME_NAME:
```
./files/THEME_NAME
./templates/THEME_NAME
```

### Variables

Set the following theme path variables in `./files/THEME_NAME/scss/_settings.scss`:
```
$path-fonts:
$path-img:
```

### Backend

Rename the following fields in the back-end:
```
Themes » THEME_NAME
Themes » THEME_NAME: Folders
Themes » THEME_NAME: Template folder
Themes » THEME_NAME » Page layouts: Custom JavaScript code
```

## Structure
```
.
├── files
│   ├── THEME_NAME
│   │   ├── apple-touch-icon-precomposed.png
│   │   ├── favicon.ico
│   │   ├── img
│   │   │   └── icons
│   │   │       ├── breadcrumb.png
│   │   │       └── download.png
│   │   ├── js
│   │   │   └── script.js
│   │   └── scss
│   │       ├── _print.scss
│   │       ├── _settings.scss
│   │       ├── core
│   │       │   ├── _accordion.scss
│   │       │   ├── _code.scss
│   │       │   ├── _downloads.scss
│   │       │   ├── _form.scss
│   │       │   ├── _gallery.scss
│   │       │   ├── _headline.scss
│   │       │   ├── _hyperlink.scss
│   │       │   ├── _image.scss
│   │       │   ├── _list.scss
│   │       │   ├── _markdown.scss
│   │       │   ├── _player.scss
│   │       │   ├── _slider.scss
│   │       │   ├── _table.scss
│   │       │   ├── _text.scss
│   │       │   ├── _toplink.scss
│   │       │   └── _youtube.scss
│   │       ├── elements
│   │       │   ├── _button.scss
│   │       │   ├── _enclosure.scss
│   │       │   ├── _pagination.scss
│   │       │   └── _pdf.scss
│   │       ├── helpers
│   │       │   ├── _mixins.scss
│   │       │   └── _utilities.scss
│   │       ├── layout
│   │       │   ├── _base.scss
│   │       │   ├── _container.scss
│   │       │   ├── _footer.scss
│   │       │   ├── _header.scss
│   │       │   ├── _left.scss
│   │       │   ├── _main.scss
│   │       │   ├── _right.scss
│   │       │   ├── _sidebar.scss
│   │       │   └── _wrapper.scss
│   │       ├── modules
│   │       │   ├── _article.scss
│   │       │   ├── _articleList.scss
│   │       │   ├── _booknav.scss
│   │       │   ├── _breadcrumb.scss
│   │       │   ├── _calendar.scss
│   │       │   ├── _changePassword.scss
│   │       │   ├── _closeAccount.scss
│   │       │   ├── _comments.scss
│   │       │   ├── _customnav.scss
│   │       │   ├── _events.scss
│   │       │   ├── _faq.scss
│   │       │   ├── _listing.scss
│   │       │   ├── _login.scss
│   │       │   ├── _lostPassword.scss
│   │       │   ├── _navigation.scss
│   │       │   ├── _news.scss
│   │       │   ├── _newsletter.scss
│   │       │   ├── _personalData.scss
│   │       │   ├── _quicklink.scss
│   │       │   ├── _quicknav.scss
│   │       │   ├── _randomImage.scss
│   │       │   ├── _registration.scss
│   │       │   ├── _rssReader.scss
│   │       │   ├── _search.scss
│   │       │   └── _sitemap.scss
│   │       └── styles.scss
│   └── content
│       ├── audio
│       ├── documents
│       ├── images
│       ├── swf
│       └── video
└── templates
    └── THEME_NAME
```

## License

Contao CMS Theme Boilerplate is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT) © [Marco Biedermann](https://www.marcobiedermann.com).
