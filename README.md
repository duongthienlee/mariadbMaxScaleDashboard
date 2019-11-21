# mariadbMaxScaleDashboard
My own configuration: Support webpack 4 configuration mode: development & production
This is a testing dashboard application for MariaDB MaxScale

## How to start(prefarably using yarn)
node v10.16.0
install node_modules

`yarn`

`yarn start`

disable CORS on browser to login to the application at port 8080: http://localhost:8080

### The application require authentication to access the dashboard.
Only MariaDB and those who has been authorised have the access to login

### The application uses latest technology such as react hooks, react-table V7, redux V4, MaterialUI V4,...
The webpack boilerplate for this application has been configured by me.
[My Webpack boilerplate ](https://github.com/duongthienlee/webpack-react-from-scratch)


### Rest API
the testing Restful API currently supports http only.
So in order to run this application, you need to run it locally and disable CORS, for example on Chrome, MacOs:
run this command or you can use Automator on MacOs to run the following script as an App.

`open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`

### The application is currently supposed to have 3 page views:
#### Basic Auth
* Login view (/login)

#### Internally MaxScale creates a server object for each actual server it is aware of. MaxScale may be made aware of servers via the configuration file it reads at startup or created via the REST-API. Note that created means in this context only that the MaxScale internal server object is created. The MaxScale setup made available to you has 4 servers; one primary and three replicas. The existing servers can be found out using the REST-API call /v1/servers.
* Dashboard view (/) which visualizes the server information that get from the Restful API

#### MaxScale collects information about itself at runtime. Some of that information is accessible via
the REST-API call /v1/maxscale/threads. The value stats.load.last_second shows the load
for the previous second.
* Thread view (AKA Graph view) (/thread) which visualizes the last second load.

#### Notice
The Restful API doesn't allow to load the code from the MaxScale host, you need to disable
the same origin policy that browser typically enforce. With Chrome you do it by involing it
with the flag --disable-web-security.
