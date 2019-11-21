import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Chart from "components/Chart";

const useStyles = makeStyles(theme => ({
    chartContainer: {
        margin: 50,
        height: 400
    }

}))
const LiveChart = ({ threads }) => {
    const classes = useStyles()
    const theme = useTheme();
    const [lineChartData, setLineChartData] = React.useState(
        {
            labels: [],
            datasets: [
                {
                    type: "line",
                    label: `THREAD 0`,
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
    )

    React.useEffect(() => {
        if (threads.length > 0) {
            const oldThreadsDataSet = lineChartData.datasets[0]
            const newThreadsDataSet = { ...oldThreadsDataSet }
            newThreadsDataSet.data.push(threads[0].value.toString())

            const newChartData = {
                ...lineChartData,
                datasets: [newThreadsDataSet],
                labels: lineChartData.labels.concat(
                    new Date().toLocaleTimeString()
                )
            }
            setLineChartData(newChartData)
        }
    }, [threads])


    const genDataSet = (threads) => {
        let arr = [];

        let obj = {
            type: "line",
            label: `THREAD ${threads[0].id}`,
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: theme.palette.primary.main,
            pointBackgroundColor: theme.palette.secondary.main,
            pointBorderColor: theme.palette.secondary.main,
            borderWidth: "2",
            lineTension: 0.45,
            data: [threads[0].value.toString()]
        }


        return arr;
    }
    return (
        <div className={classes.chartContainer}>
            <Chart
                data={
                    lineChartData
                }
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
        </div>
    );
}


export default LiveChart
