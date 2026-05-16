// Whop Webhook 处理 — payment.succeeded 事件
// 接入步骤：
// 1. Whop Dashboard → Developer → Webhooks → 添加端点 https://launch101.vercel.app/api/webhook
// 2. 把 Webhook Secret 添加到 Vercel 环境变量：WHOP_WEBHOOK_SECRET
// 3. 取消下面注释，完成发货/开通逻辑

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  // const signature = req.headers['x-whop-signature'];
  // const secret = process.env.WHOP_WEBHOOK_SECRET;
  // if (!verifySignature(req.body, signature, secret)) {
  //   return res.status(401).json({ error: 'Invalid signature' });
  // }

  const event = req.body;
  console.log('Whop webhook received:', event?.action);

  if (event?.action === 'payment.succeeded') {
    const { user_id, product_id } = event.data ?? {};
    console.log(`用户 ${user_id} 订阅了 ${product_id}，开通权限`);
    // TODO: 在这里写你的开通逻辑
  }

  res.status(200).json({ received: true });
};
