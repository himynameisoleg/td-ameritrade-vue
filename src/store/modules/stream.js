const stream = {
  state: () => ({ 
		test: "OK"
	}),
  mutations: {},
  actions: {
		createStream() {

		},
		getData() {
			console.log('hello')
		}
	},
  getters: {}
};

export default stream

/* 

loginRequest = new Request()
            {
                Service = $"{ nameof(Services.ADMIN) }",
                Requestid = int.Parse($"{(int)Services.ADMIN}{(int)Commands.LOGIN}"),
                Command = $"{ Commands.LOGIN }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Credential = URLExtensions.ToKeyValueURL(credentials),
                    Token = userPrincipals.streamerInfo.token,
                    Version = "1.0"
                }
            };
            logoutRequest = new Request()
            {
                Service = $"{ nameof(Services.ADMIN) }",
                Requestid = int.Parse($"{(int)Services.ADMIN}{(int)Commands.LOGOUT}"),
                Command = $"{ Commands.LOGOUT }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters() { }
            };
            chartFuturesRequest = new Request()
            {
                Service = $"{ nameof(Services.CHART_FUTURES) }",
                Requestid = int.Parse($"{(int)Services.CHART_FUTURES}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "/ES",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }," +
                             $"{ (int)Fields.close_price }," +
                             $"{ (int)Fields.volume }"
                }
            };
            //chartFuturesRequest2 = new Request()
            //{
            //    Service = $"{ nameof(Services.CHART_FUTURES) }",
            //    Requestid = int.Parse($"{(int)Services.CHART_FUTURES}{(int)Commands.SUBS}"),
            //    Command = $"{ nameof(Commands.SUBS) }",
            //    Account = $"{ userPrincipals.accounts[0].accountId }",
            //    Source = $"{ userPrincipals.streamerInfo.appId }",
            //    Parameters = new Parameters()
            //    {
            //        Keys = "AAPL,MSFT",
            //        Fields = $"{ (int)Fields.key }," +
            //                 $"{ (int)Fields.chart_time }," +
            //                 $"{ (int)Fields.open_price }," +
            //                 $"{ (int)Fields.high_price }," +
            //                 $"{ (int)Fields.low_price }," +
            //                 $"{ (int)Fields.close_price }," +
            //                 $"{ (int)Fields.volume }," +
            //                 $"8"
            //    }
            //};
            qosRequest = new Request()
            {
                Service = $"{ nameof(Services.ADMIN) }",
                Requestid = int.Parse($"{(int)Services.ADMIN}{(int)Commands.QOS}"),
                Command = $"{ Commands.QOS }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    qoslevel = "2" // websocket default
                }
            };
            chartHistoryFuturesRequest = new Request()
            {
                Service = $"{ nameof(Services.CHART_HISTORY_FUTURES) }",
                Requestid = int.Parse($"{(int)Services.CHART_HISTORY_FUTURES}{(int)Commands.GET}"),
                Command = $"{ nameof(Commands.GET) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    symbol = "/ES",
                    frequency = nameof(Frequency.m1),
                    period = nameof(Period.d5)
                    //        "END_TIME" = DateTime.UtcNow.ToString("yyyy-MM-HH:mm:ss.fff", CultureInfo.InvariantCulture),
                    //"START_TIME" = 
                }
            };
            levelOneFuturesRequest = new Request()
            {
                Service = $"{ nameof(Services.LEVELONE_FUTURES) }",
                Requestid = int.Parse($"{(int)Services.LEVELONE_FUTURES}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "/ES",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }"
                }
            };
 
            levelOneForexRequest = new Request()
            {
                Service = $"{ nameof(Services.LEVELONE_FOREX) }",
                Requestid = int.Parse($"{(int)Services.LEVELONE_FOREX}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "EUR/USD",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }," +
                             $"5," +
                             $"6," +
                             $"7," +
                             $"8," +
                             $"9," +
                             $"10," +
                             $"11," +
                             $"12," +
                             $"13"
                }
            };
            newsHeadlineRequest = new Request()
            {
                Service = $"{ nameof(Services.NEWS_HEADLINE) }",
                Requestid = int.Parse($"{(int)Services.NEWS_HEADLINE}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "AMZN",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }"
                }
            };
            timesaleFuturesRequest = new Request()
            {
                Service = $"{ nameof(Services.TIMESALE_FUTURES) }",
                Requestid = int.Parse($"{(int)Services.TIMESALE_FUTURES}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "/ES",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }"
                }
            };
            timesaleEquityRequest = new Request()
            {
                Service = $"{ nameof(Services.TIMESALE_EQUITY) }",
                Requestid = int.Parse($"{(int)Services.TIMESALE_EQUITY}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "AAPL",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }"
                }
            };
            
            #region ToTest:
            futuresBookRequest = new Request()
            {
                Service = $"{ nameof(Services.FUTURES_BOOK) }",
                Requestid = int.Parse($"{(int)Services.FUTURES_BOOK}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "/ES",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }"
                }
            };
            forexBookRequest = new Request()
            {
                Service = $"{ nameof(Services.FOREX_BOOK) }",
                Requestid = int.Parse($"{(int)Services.FOREX_BOOK}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "EUR/USD",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }"
                }
            };
            futuresOptionsBookRequest = new Request()
            {
                Service = $"{ nameof(Services.FUTURES_OPTIONS_BOOK) }",
                Requestid = int.Parse($"{(int)Services.FUTURES_OPTIONS_BOOK}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "/ES"
                }
            };
            listedBookRequest = new Request()
            {
                Service = $"{ nameof(Services.LISTED_BOOK) }",
                Requestid = int.Parse($"{(int)Services.LISTED_BOOK}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "/ES",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }"
                }
            };
            nasdaqBookRequest = new Request()
            {
                Service = $"{ nameof(Services.NASDAQ_BOOK) }",
                Requestid = int.Parse($"{(int)Services.NASDAQ_BOOK}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "AMZN",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }"
                }
            };
            optionsBookRequest = new Request()
            {
                Service = $"{ nameof(Services.OPTIONS_BOOK) }",
                Requestid = int.Parse($"{(int)Services.OPTIONS_BOOK}{(int)Commands.SUBS}"),
                Command = $"{ nameof(Commands.SUBS) }",
                Account = $"{ userPrincipals.accounts[0].accountId }",
                Source = $"{ userPrincipals.streamerInfo.appId }",
                Parameters = new Parameters()
                {
                    Keys = "SPY",
                    Fields = $"{ (int)Fields.key }," +
                             $"{ (int)Fields.chart_time }," +
                             $"{ (int)Fields.open_price }," +
                             $"{ (int)Fields.high_price }," +
                             $"{ (int)Fields.low_price }"
                }
            };
            #endregion
						*/