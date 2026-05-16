// Stripe Checkout 端点占位 —— 接入步骤：
// 1. npm i stripe
// 2. 在 Vercel 项目里设置环境变量 STRIPE_SECRET_KEY
// 3. 取消下面注释，把 price_xxx 换成你的 Stripe Price ID

// const Stripe = require('stripe');
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // 占位：未配置时返回空 url，前端会提示
  res.status(200).json({ url: null, message: 'Stripe 未配置' });

  // 真正接入后用下面的代码替换上面那行：
  //
  // const session = await stripe.checkout.sessions.create({
  //   mode: 'payment',
  //   line_items: [{ price: 'price_xxx', quantity: 1 }],
  //   success_url: `${req.headers.origin}/?paid=1`,
  //   cancel_url: `${req.headers.origin}/checkout.html`,
  // });
  // res.status(200).json({ url: session.url });
};
