
console.log('forum.js loaded2222');

app.initializers.add('damonhu-biosignature', () => {
    console.log('forum.js loaded ssssss');
    const extend = flarum.core.compat['extend'];
    const Post = flarum.core.compat['components/Post'];
    const m = window.m; // Mithril 也是全局的
    
    extend(Post.prototype, 'content', function(items) {
        console.log('Post content hook called', this.post.user());
    });

    extend(Post.prototype, 'footer', function(items) {
        console.log('footer hook called', this.post.user());
        const user = this.post.user();
        if (!user) return;
        const bio = user.bio();
        console.log("ssssss", bio)
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
