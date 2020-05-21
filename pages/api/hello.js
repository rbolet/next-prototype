// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let bulldozer = 'bulldozer';

export default (req, res) => {
  if(req.method === 'GET'){
  
    res.status(200).json({bulldozer});
  }

  if(req.method === 'POST'){
    bulldozer = req.body.dolphins
  }
}
