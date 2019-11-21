import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Chart from "components/Chart";
import update from 'immutability-helper';

const useStyles = makeStyles(theme => ({
    chartContainer: {
        margin: 50,
        height: 400
    }

}))

const LiveChart = ({ threads }) => {
    const classes = useStyles()
    const theme = useTheme();

    const genDataSet = (threads) => {
        let arr = [];

        for (let i = 0; i < threads.length; i++) {
            let obj = {
                type: "line",
                label: `THREAD ID - ${threads[i].id}`,
                backgroundColor: theme.palette.primary.light, // background of the line
                borderColor: theme.palette.primary.main, // line color
                pointBackgroundColor: theme.palette.secondary.main,
                pointBorderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 2,
                lineTension: 0.25,
                data: [threads[i].value.toString()]
            }
            arr.push(obj)
        }

        return arr;
    }

    const [lineChartData, setLineChartData] = React.useState(
        {
            labels: [],
            datasets: genDataSet(threads)
        }
    )

    React.useEffect(() => {
        for (let i = 0; i < threads.length; i++) {
            const oldThreadsDataSet = lineChartData.datasets[i]

            const newThreadsDataSet = { ...oldThreadsDataSet }

            newThreadsDataSet.data.push(threads[i].value.toString())

            const newLineChartData = update(lineChartData, {
                datasets: { [i]: { $set: newThreadsDataSet } },
                labels: {
                    $push: [new Date().toLocaleTimeString()]
                }
            })
            setLineChartData(newLineChartData)
        }
    }, [threads])




    return (
        <div className={classes.chartContainer}>
            <Chart
                data={lineChartData}
                options={{
                    responsive: true,
                    animation: {
                        duration: 250 * 1.5,
                        easing: 'linear'
                    },
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: true
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 5
                                }
                            }
                        ],
                        yAxes: [{
                            ticks: {
                                max: 100,
                                min: 0
                            }
                        }]
                    }
                }}
            />
        </div>
    );
}


export default LiveChart

/**
 *
 * import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Chart from "components/Chart";
import update from 'immutability-helper';

const useStyles = makeStyles(theme => ({
    chartContainer: {
        margin: 50,
        height: 400
    }

}))
const LiveChart = ({ threads }) => {
    const classes = useStyles()
    const theme = useTheme();
    const [lineChartData, setLineChartData] = React.useState(genInitialDataSets(threads))

    function genInitialDataSets(threads) {
        if (threads.length > 0) {
            let arr = []
            for (let i = 0; i < threads.length; i++) {
                let obj = {
                    labels: [],
                    datasets: [
                        {
                            type: "line",
                            label: `THREAD ID: ${threads.id}`,
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderColor: theme.palette.primary.main,
                            pointBackgroundColor: theme.palette.secondary.main,
                            pointBorderColor: theme.palette.secondary.main,
                            borderWidth: "2",
                            lineTension: 0.45,
                            data: []
                        }
                    ]
                }
                arr.push(obj)
            }
            return arr
        }
    }
    // watch on changes of threads to update chart
    React.useEffect(() => {
        if (threads.length > 0) {
            for (let i = 0; i < threads.length; i++) {

                const oldThreadsDataSet = lineChartData[i].datasets[0]
                const newThreadsDataSet = { ...oldThreadsDataSet }
                newThreadsDataSet.data.push(threads[i].value.toString())

                const newLineChartData = update(lineChartData, {
                    [i]: {
                        datasets: { $set: newThreadsDataSet },
                        labels: {
                            $set: lineChartData.labels.concat(
                                new Date().toLocaleTimeString()
                            )
                        }
                    }
                })
                setLineChartData([newLineChartData])
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [threads])

    return (
        <div className={classes.chartContainer}>
            {threads.length > 0 ?
                <Chart
                    data={lineChartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        tooltips: {
                            enabled: true
                        },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10
                                    }
                                }
                            ]
                        }
                    }}
                />
                :
                <div>Loading</div>
            }
        </div>
    );
}


export default LiveChart

 */