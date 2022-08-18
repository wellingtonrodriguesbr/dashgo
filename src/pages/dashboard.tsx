import Head from "next/head";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.gray["500"],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: "datetime",
    axisBorder: { color: theme.colors.gray["600"] },
    axisTicks: { color: theme.colors.gray["600"] },
    categories: [
      "December 17, 2021 03:24:00",
      "January 17, 2022 03:24:00",
      "February 17, 2022 03:24:00",
      "March 17, 2022 03:24:00",
      "April 17, 2022 03:24:00",
      "May 17, 2022 03:24:00",
      "June 17, 2022 03:24:00",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series1 = [{ name: "series1", data: [31, 120, 10, 28, 51, 118, 59] }];
const series2 = [{ name: "series2", data: [50, 180, 40, 72, 200, 90, 98] }];
const series3 = [{ name: "series3", data: [20, 380, 40, 700, 200, 50, 88] }];
const series4 = [{ name: "series4", data: [10, 130, 40, 92, 190, 44, 108] }];

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Dashgo.</title>
      </Head>
      <Flex direction="column" h="100vh">
        <Header />

        <Flex width="100%" py="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <SimpleGrid flex="1" gap="4" minChildWidth={["100%", "420px"]}>
            <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Visualizações da semana
              </Text>
              <Chart
                type="area"
                height={160}
                options={options}
                series={series1}
              />
            </Box>

            <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Inscritos da semana
              </Text>
              <Chart
                type="area"
                height={160}
                options={options}
                series={series2}
              />
            </Box>
            <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Comentários
              </Text>
              <Chart
                type="area"
                height={160}
                options={options}
                series={series3}
              />
            </Box>

            <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Curtidas
              </Text>
              <Chart
                type="area"
                height={160}
                options={options}
                series={series4}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
