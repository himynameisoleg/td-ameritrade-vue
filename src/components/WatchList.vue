<template lang="">
  <div>
    <b-button @click="sendSocket()" :disabled="!readyToSend">Login</b-button>
    <b-button @click="streamData()" :disabled="!readyToSend">Subscribe</b-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      connection: null,
      readyToSend: false,
      userPrincipalsResponse: {
        userId: "operchyk",
        userCdDomainId: "A000000083163977",
        primaryAccountId: "275387709",
        lastLoginTime: "2021-01-08T22:04:09+0000",
        tokenExpirationTime: "2021-01-08T22:34:08+0000",
        loginTime: "2021-01-08T22:04:08+0000",
        accessLevel: "CUS",
        stalePassword: false,
        streamerInfo: {
          streamerBinaryUrl: "streamer-bin.tdameritrade.com",
          streamerSocketUrl: "streamer-ws.tdameritrade.com",
          token: "11d12ae8c99c89b339ccfa6b901b26484fef8412",
          tokenTimestamp: "2021-01-08T22:04:16+0000",
          userGroup: "ACCT",
          accessLevel: "ACCT",
          acl:
            "BPDRDTDWESF7G1G3G5G7GKGLH1H3H5LTM1MAOCPNQSRFSDTETFTOTTUAURXBXNXOD2D4D6D8E2E4E6E8F2F4F6H7I1",
          appId: "DP",
        },
        professionalStatus: "NON_PROFESSIONAL",
        quotes: {
          isNyseDelayed: false,
          isNasdaqDelayed: false,
          isOpraDelayed: false,
          isAmexDelayed: false,
          isCmeDelayed: true,
          isIceDelayed: true,
          isForexDelayed: true,
        },
        streamerSubscriptionKeys: {
          keys: [
            {
              key:
                "a50e8f52950928fc34e19e1869b2c4ca41c911acdf2cbfdd04de0ac8d5057d1b8",
            },
          ],
        },
        exchangeAgreements: {
          OPRA_EXCHANGE_AGREEMENT: "ACCEPTED",
          NYSE_EXCHANGE_AGREEMENT: "ACCEPTED",
          NASDAQ_EXCHANGE_AGREEMENT: "ACCEPTED",
        },
        accounts: [
          {
            accountId: "275387709",
            displayName: "operchyk",
            accountCdDomainId: "A000000083163976",
            company: "AMER",
            segment: "AMER",
            acl:
              "BPDRDTDWESF7G1G3G5G7GKGLH1H3H5LTM1MAOCPNQSRFSDTETFTOTTUAURXBXNXO",
            authorizations: {
              apex: false,
              levelTwoQuotes: false,
              stockTrading: true,
              marginTrading: true,
              streamingNews: false,
              optionTradingLevel: "COVERED",
              streamerAccess: true,
              advancedMargin: true,
              scottradeAccount: false,
            },
          },
        ],
      },
      credentials: {},
      request: {},
    };
  },
  created() {
    this.openSocket();
  },
  methods: {
    getData() {
      this.$store.dispatch("getData");
    },
    openSocket() {
      const userPrincipalsResponse = this.userPrincipalsResponse;

      const tokenTimeStampAsDateObj = new Date(
        userPrincipalsResponse.streamerInfo.tokenTimestamp
      );
      const tokenTimeStampAsMs = tokenTimeStampAsDateObj.getTime();

      const credentials = {
        userid: userPrincipalsResponse.accounts[0].accountId,
        token: userPrincipalsResponse.streamerInfo.token,
        company: userPrincipalsResponse.accounts[0].company,
        segment: userPrincipalsResponse.accounts[0].segment,
        cddomain: userPrincipalsResponse.accounts[0].accountCdDomainId,
        usergroup: userPrincipalsResponse.streamerInfo.userGroup,
        accesslevel: userPrincipalsResponse.streamerInfo.accessLevel,
        authorized: "Y",
        timestamp: tokenTimeStampAsMs,
        appid: userPrincipalsResponse.streamerInfo.appId,
        acl: userPrincipalsResponse.streamerInfo.acl,
      };
      this.credentials = credentials;

      const request = {
        requests: [
          {
            service: "ADMIN",
            command: "LOGIN",
            requestid: 0,
            account: userPrincipalsResponse.accounts[0].accountId,
            source: userPrincipalsResponse.streamerInfo.appId,
            parameters: {
              credential: this.jsonToQueryString(this.credentials),
              token: userPrincipalsResponse.streamerInfo.token,
              version: "1.0",
            },
          },
        ],
      };
      this.request = request;

      console.log("Starting connection to WebSocket Server");
      this.connection = new WebSocket(
        "wss://" + userPrincipalsResponse.streamerInfo.streamerSocketUrl + "/ws"
      );

      this.connection.onmessage = function(event) {
        console.log(event);
      };

      this.connection.onopen = function(event) {
        console.log(event);
        console.log("Successfully connected to the echo websocket server...");
      };

      this.readyToSend = true;
    },
    sendSocket() {
      console.log(this.connection);
      this.connection.send(JSON.stringify(this.request));
    },
    streamData(key) {
      let subsRequest = {
        requests: [
          {
            service: "LEVELONE_FUTURES",
            requestid: 2,
            command: "SUBS",
            account: this.userPrincipalsResponse.accounts[0].accountId,
            source: this.userPrincipalsResponse.streamerInfo.appId,
            parameters: {
              keys: "/ES",
              fields: "0,1,2,3,4",
            },
          },
        ],
      };

			this.sendSocket(subsRequest);
    },

    jsonToQueryString(json) {
      return Object.keys(json)
        .map(function(key) {
          return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
        })
        .join("&");
    },
  },
};
</script>
