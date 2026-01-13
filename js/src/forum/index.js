// import app from 'flarum/forum/app'; // 确保路径与 webpack externals 一致
import { extend } from 'flarum/common/extend';
import Post from 'flarum/forum/components/Post';

if (!app) {
  console.error('Flarum app 对象未找到！请检查 Webpack externals 配置。');
} else {
  console.error('开始执行初始化器');
  app.initializers.add('flarum-ext-biosignature', () => {
    console.info("init")
    extend(Post.prototype, 'content', function (items) {
      console.error("content")
    })
    extend(Post.prototype, 'view', function (items) {
      console.error("view")
    })
    extend(Post.prototype, 'footerItems', function (items) {
      console.error("ssssssss")
      const post = this.attrs.post;
      console.error("ssssssss1", post)
      if (!post) return;

      const user = post.user();
      // 这里的 .attribute('bio') 对应 extend.php 里定义的名称
      const bio = user ? user.attribute('bio') : null;

      console.error("ssssssss2", user, bio)
      if (bio) {
        items.add('bio-signature', (
          <div className="Post-signature">
            {bio}
          </div>
        ), -50); // -50 确保它在最后面
      }
    });
  });
}