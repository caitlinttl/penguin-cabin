// Get Client Ip

const getClientIpModel = {
  getClientIp: (req) => {
    const clientIp = 
    (req.headers["x-forwarded-for"] || "").split(",").pop() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

    return clientIp
  }

}
  
module.exports = getClientIpModel

