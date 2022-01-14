import {Flex, SimpleGrid, Box, Text, theme} from '@chakra-ui/react';
import dynamic from 'next/dynamic'

import {Header} from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'),{
    ssr: false //server side rendering; nunca será carregado pelo lado do sevidor
})

const options = { //estilização do gráfico
    chart:{
        toolbar: {
            show: false, //sem menu no gráfico
        },
        zoom: {
            enabled: false, //sem zoom do gráfico
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false, //sem linhas no grafico
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-22T00:00:00.000Z',
            '2021-03-23T00:00:00.000Z',
            '2021-03-24T00:00:00.000Z',
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
};
const series = [ //dados do gráfico
    {name: 'series1', data: [31, 120, 10, 28, 61, 18, 109]}
];

export default function Dashboard() {
    return(
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box p={["6","8"]} bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box p={["6","8"]}  bg="gray.800" pb="4" borderRadius={8}>
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}