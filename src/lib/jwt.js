const jwt = require('jsonwebtoken')

const accessSecret = process.env.ACCESS_SECRET || 'ACCESS_SECRET_FOR_TEST'
const refreshSecret = process.env.REFRESH_SECRET || 'REFRESH_SECRET_FOR_TEST'
const issuer = process.env.JWT_ISSUER || 'SPACEMAP'
const algorithm = process.env.JWT_ALGO || 'HS256'

const sign = (payload, options, refreshFlag) =>
  jwt.sign(payload, refreshFlag ? refreshSecret : accessSecret, {
    algorithm,
    expiresIn: refreshFlag ? '15d' : '20m',
    issuer,
    ...options,
  })

const verify = (token, refreshFlag) =>
  jwt.verify(token, refreshFlag ? refreshSecret : accessSecret, (err, decoded) => {
    if (err)
      return {
        verified: false,
        body: err,
      }
    return { verified: true }
  })

module.exports = {
  sign,
  verify,
}