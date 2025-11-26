function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    if (
        shExpMatch(host, "g6.globalwits.cn") ||
        shExpMatch(host, "*.g6.globalwits.cn") ||
        shExpMatch(host, "hnyzxt.hnga.gov.cn") ||
        shExpMatch(host, "*.hnyzxt.hnga.gov.cn") ||
        shExpMatch(host, "findbiz.nat.gov.tw") ||
        shExpMatch(host, "*.findbiz.nat.gov.tw") ||
        shExpMatch(host, "e-services.cr.gov.hk") ||
        shExpMatch(host, "*.e-services.cr.gov.hk") ||
        shExpMatch(host, "sgs.com") ||
        shExpMatch(host, "*.sgs.com") ||
        shExpMatch(host, "2ip.ru") ||
        shExpMatch(host, "*.2ip.ru") ||
        shExpMatch(host, "eservices.dubaided.gov.ae") ||
        shExpMatch(host, "*.eservices.dubaided.gov.ae")
    ) {
        return "PROXY 212.69.87.86:54100";
    }

    return "DIRECT";
}