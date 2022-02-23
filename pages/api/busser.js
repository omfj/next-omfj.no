// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const busses = require("./russebusser.json")

const handler = (req, res) => {
  res.status(200).json(busses)
}

export default handler;
