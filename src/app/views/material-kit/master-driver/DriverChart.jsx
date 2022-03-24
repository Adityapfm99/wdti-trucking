import React from 'react'
import { useTheme } from '@mui/system'
import ReactEcharts from 'echarts-for-react'

const DriverChart = ({ height, color = [] }) => {
    const theme = useTheme()

    const option = {
        grid: {
            top: '10%',
            bottom: '10%',
            right: '5%',
        },
        legend: {
            show: true,
        },
        barGap: 0,
        barMaxWidth: '44px',
        tooltip: {},
        dataset: {
            source: [
                ['Day', 'Driver A', 'Driver B', 'Driver C', 'Driver D', 'Driver E'],
                ['01 Mar 2022', 8000, 8200, 4300, 8200, 4300],
                ['02 Mar 2022', 9950, 8120, 6304, 5624, 4321],
                ['03 Mar 2022', 6900, 7921, 6702, 4302, 5431],
                ['04 Mar 2022', 6700, 8000, 5693, 3499, 3155],
                ['05 Mar 2022', 5610, 8050, 4592, 4393, 3913],
                ['06 Mar 2022', 5670, 7720, 4420, 4392, 4452],
                ['07 Mar 2022', 4500, 4900, 4300, 5602, 4300],
            ],
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: theme.palette.text.primary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: theme.palette.text.secondary,
                    opacity: 0.15,
                },
            },
            axisLabel: {
                color: theme.palette.text.primary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'line' }, { type: 'line' }, { type: 'line' }, { type: 'line' }, { type: 'line' }],
    }

    return (
        <ReactEcharts
            style={{ height: height }}
            option={{
                ...option,
                // color: [...color],
            }}
        />
    )
}

export default DriverChart
