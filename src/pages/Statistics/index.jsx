import React, { useEffect } from 'react'
import axios from 'axios'
import config from 'config';
import LiveChart from './LiveChart'

const Statistics = (props) => {
    const [threads, setThreads] = React.useState([])

    function delay(t, v) {
        return new Promise(function (resolve) {
            setTimeout(resolve.bind(null, v), t)
        });
    }

    let credentials = localStorage.getItem("credentials")

    async function fetchThreads() {
        try {
            let res = await axios.get(`${config.api.root}/v1/maxscale/threads`, {
                auth: credentials
            })
            let { data } = await res.data;
            let threads = await data.reduce((accumulator, _, index, array) => {
                // if index % 2 !== 0 then keep array, otherwise reverse the array
                let obj = { id: array[index].id, value: array[index].attributes.stats.load.last_second }
                accumulator.push(obj)

                return accumulator
            }, [])
            setThreads(threads)

        } catch (error) {
            console.log("error", error);
        }
        await delay(1000).then(() => {
            return fetchThreads()
        });
    }

    useEffect(() => {
        fetchThreads()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            {threads.length > 0 &&
                <LiveChart
                    threads={threads} />
            }
        </div>
    )

}

export default Statistics