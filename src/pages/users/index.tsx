import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isFetching } = useUsers(page);
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Usúarios | Dashgo.</title>
      </Head>
      <Box>
        <Header />

        <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
          <Box flex="1" borderRadius="8" bg="gray.800" p="8" w="100%">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usúarios
                {!isLoading && isFetching && <Spinner size="sm" ml="4" />}
              </Heading>
              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} />}
                  cursor="pointer"
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>
            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter dados dos usúarios</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha" maxWidth="100%">
                  <Thead>
                    <Tr>
                      <Th color="gray.300">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th px="0">Usúario</Th>
                      {isWideVersion && <Th px="0">Data de cadastro</Th>}
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.users.map((user) => (
                      <Tr key={user.id}>
                        <Td>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td px="0">
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="small" color="gray.300">
                            {user.email}
                          </Text>
                        </Td>
                        {isWideVersion && <Td px="0">{user.createdAt}</Td>}
                        <Td px="0">
                          <Button
                            as="a"
                            size="sm"
                            fontSize="small"
                            colorScheme="pink"
                            cursor="pointer"
                          >
                            <Icon as={RiPencilLine} />
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                <Pagination
                  totalCountOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
