

const ip_pattern = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/

const mac_pattern = /^([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}$/


export function IP(address){
 return ip_pattern.test(address)

}

export function MAC(address){
 return mac_pattern.test(address)

}
// console.log(MAC('2d-3C-4F-5D-3C-A2'))