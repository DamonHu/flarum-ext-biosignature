// import app from 'flarum/forum/app'; // 确保路径与 webpack externals 一致
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('flarum-ext-biosignature', () => {
    extend(CommentPost.prototype, 'footerItems', function (items) {
      const post = this.attrs.post;
      if (!post) return;
      const user = post.user();
      // 这里的 .attribute('bio') 对应 extend.php 里定义的名称
      const bio = user ? user.attribute('bio') : null;

      if (bio) {
        items.add('bio-signature', (
          <div className="Post-signature">{m.trust(bio)}</div>
        ), -50); // -50 确保它在最后面
      }
    });
});