# mariadbMaxScaleDashboard
My own configuration: Support webpack 4 configuration mode: development & production
This is a testing dashboard application for MariaDB MaxScale

### The application require authentication to access the dashboard.
Only MariaDB and those who has been authorised have the access to login

### The application uses latest technology such as react hooks, react-table V7, redux V4, MaterialUI V4,...
The webpack boilerplate for this application has been configured by me.
https://github.com/duongthienlee/webpack-react-from-scratch

### The application intends to use HashRouter as for the sake of simplicity, to be able to host on GitHub Page
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