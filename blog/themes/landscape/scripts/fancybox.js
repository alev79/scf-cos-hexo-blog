let rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

/**
* Fancybox tag
*
* Syntax:
*   {% fancybox /path/to/image [/path/to/thumbnail] [title] %}
*/

hexo.extend.tag.register('fancybox', function(args) {
    let original = args.shift();
    let thumbnail = '';

    if (args.length && rUrl.test(args[0])) {
        thumbnail = args.shift();
    }

    let title = args.join(' ');

    return '<a class="fancybox" href="' + original + '" title="' + title + '">' +
    '<img src="' + (thumbnail || original) + '" alt="' + title + '">';
    '</a>' +
    (title ? '<span class="caption">' + title + '</span>' : '');
});