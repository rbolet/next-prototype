// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if(req.method === 'GET'){
    let bulldozer = 'bulldozer';
    res.status(200).json({bulldozer});
  }
}
