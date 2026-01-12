import { extend } from 'flarum/extend';
import Post from 'flarum/components/Post';
import m from 'mithril';

app.initializers.add('damonhu-biosignature', () => {
    extend(Post.prototype, 'footer', function(items) {
        const user = this.post.user();
        if (!user) return;

        const bio = user.bio();
        if (bio) {
            items.add('bio-signature',
                m('div.Post-signature', {
                    style: {
                        'margin-top': '8px',
                        'padding-top': '4px',
                        'border-top': '1px solid #eee',
                        'font-size': '0.85em',
                        'color': '#666',
                        'max-height': '3em',
                        'overflow': 'hidden'
                    }
                }, bio)
            );
        }
    });
});
