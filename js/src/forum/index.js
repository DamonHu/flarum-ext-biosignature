import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import Post from 'flarum/forum/components/Post';

app.initializers.add('damonhu-biosignature', () => {
  extend(Post.prototype, 'footer', function(items) {
    const post = this.attrs.post;
    if (!post) return;

    const user = post.user();
    // 这里的 .attribute('bio') 对应 extend.php 里定义的名称
    const bio = user ? user.attribute('bio') : null;

    if (bio) {
      items.add('bio-signature', (
        <div className="Post-signature">
          {bio}
        </div>
      ), -50); // -50 确保它在最后面
    }
  });
});