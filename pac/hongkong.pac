function FindProxyForURL(url, host) {
    if (
        shExpMatch(host, "g6.globalwits.cn") ||
        shExpMatch(host, "*.g6.globalwits.cn") ||
        shExpMatch(host, "hnyzxt.hnga.gov.cn") ||
        shExpMatch(host, "*.hnyzxt.hnga.gov.cn") ||
        shExpMatch(host, "findbiz.nat.gov.tw") ||
        shExpMatch(host, "*.findbiz.nat.gov.tw") ||
        shExpMatch(host, "www.e-services.cr.gov.hk") ||
        shExpMatch(host, "www.sgs.com") ||
	shExpMatch(host, "2ip.ru") ||
        shExpMatch(host, "local.teams.office.com") ||
        shExpMatch(host, "local.teams.live.com") ||
        shExpMatch(host, "login.microsoftonline.com")
    ) {
        return "PROXY 212.69.87.86:54100";
    }

    return "DIRECT";
}
