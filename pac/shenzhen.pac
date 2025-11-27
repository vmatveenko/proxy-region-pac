function FindProxyForURL(url, host) {

    host = host.toLowerCase();

    var proxyHosts = [
        "g6.globalwits.cn",
        "hnyzxt.hnga.gov.cn",
        "findbiz.nat.gov.tw",
        "e-services.cr.gov.hk",
        "sgs.com",
        "2ip.ru",
        "eservices.dubaided.gov.ae"
    ];

    for (var i = 0; i < proxyHosts.length; i++) {
        var d = proxyHosts[i];
        if (host === d || shExpMatch(host, "*." + d)) {
            return "PROXY 10.33.1.254:8080; DIRECT";
        }
    }

    return "DIRECT";
}