import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
  Badge,
  Heading,
  SimpleGrid,
  Box,
  Icon,
  Image,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaTractor, FaPhone, FaCheckCircle, FaInfoCircle, FaList } from 'react-icons/fa'

export default function ProductModal({ isOpen, onClose, product }) {
  if (!product) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(10px)" />
      <ModalContent maxH="90vh" m={4}>
        <ModalHeader borderBottom="1px" borderColor="gray.200" pb={4}>
          <VStack align="start" spacing={2}>
            <HStack>
              <Badge colorScheme="green" fontSize="sm">
                {product.category}
              </Badge>
              {product.badge && (
                <Badge 
                  colorScheme={
                    product.badge === "Promotion" ? "red" : 
                    product.badge === "Exclusivité" ? "purple" : 
                    "orange"
                  } 
                  fontSize="sm"
                  px={3}
                  py={1}
                >
                  {product.badge}
                </Badge>
              )}
            </HStack>
            <Heading size="lg" color="green.dark">
              {product.name}
            </Heading>
          </VStack>
        </ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody py={6}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
            {/* Image Section */}
            <VStack spacing={4}>
              <Box
                w="full"
                h="400px"
                bg="gray.100"
                borderRadius="xl"
                overflow="hidden"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px"
                borderColor="gray.200"
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    objectFit="contain"
                    w="100%"
                    h="100%"
                  />
                ) : (
                  <Icon as={FaTractor} w={32} h={32} color="gray.400" />
                )}
              </Box>
              <HStack spacing={3} w="full">
                <Button
                  as={RouterLink}
                  to="/contact"
                  flex={1}
                  colorScheme="green"
                  size="lg"
                  leftIcon={<FaPhone />}
                  onClick={onClose}
                >
                  Contactez-nous
                </Button>
              </HStack>
            </VStack>

            {/* Details Section */}
            <VStack align="stretch" spacing={4}>
              <Tabs colorScheme="green" variant="enclosed">
                <TabList>
                  <Tab fontWeight="semibold">
                    <Icon as={FaInfoCircle} mr={2} />
                    Informations
                  </Tab>
                  <Tab fontWeight="semibold">
                    <Icon as={FaList} mr={2} />
                    Caractéristiques
                  </Tab>
                </TabList>

                <TabPanels>
                  {/* Information Tab */}
                  <TabPanel px={0}>
                    <VStack align="stretch" spacing={4}>
                      <Box>
                        <Heading size="sm" mb={2} color="green.dark">
                          Description
                        </Heading>
                        <Text color="gray.700" lineHeight="tall">
                          {product.description}
                        </Text>
                      </Box>

                      <Divider />

                      <Box>
                        <Heading size="sm" mb={3} color="green.dark">
                          Avantages
                        </Heading>
                        <VStack align="start" spacing={2}>
                          <HStack>
                            <Icon as={FaCheckCircle} color="green.500" />
                            <Text fontSize="sm">Garantie constructeur incluse</Text>
                          </HStack>
                          <HStack>
                            <Icon as={FaCheckCircle} color="green.500" />
                            <Text fontSize="sm">Service après-vente disponible</Text>
                          </HStack>
                          <HStack>
                            <Icon as={FaCheckCircle} color="green.500" />
                            <Text fontSize="sm">Livraison possible en Tunisie</Text>
                          </HStack>
                          <HStack>
                            <Icon as={FaCheckCircle} color="green.500" />
                            <Text fontSize="sm">Installation et mise en service</Text>
                          </HStack>
                        </VStack>
                      </Box>
                    </VStack>
                  </TabPanel>

                  {/* Characteristics Tab */}
                  <TabPanel px={0}>
                    <VStack align="stretch" spacing={4}>
                      <Heading size="sm" color="green.dark">
                        Fiche Technique
                      </Heading>
                      <Box
                        borderRadius="lg"
                        overflow="hidden"
                        border="1px"
                        borderColor="gray.200"
                      >
                        <TableContainer>
                          <Table variant="simple" size="sm">
                            <Thead bg="green.50">
                              <Tr>
                                <Th color="green.dark" fontSize="sm">Caractéristique</Th>
                                <Th color="green.dark" fontSize="sm">Valeur</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {Object.entries(product.fichetechnique).map(([key, value], index) => (
                                <Tr key={key} bg={index % 2 === 0 ? 'white' : 'gray.50'}>
                                  <Td fontWeight="semibold" textTransform="capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </Td>
                                  <Td>{value}</Td>
                                </Tr>
                              ))}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </VStack>
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <Box
                bg="green.50"
                p={4}
                borderRadius="lg"
                border="1px"
                borderColor="green.200"
              >
                <VStack align="start" spacing={2}>
                  <Heading size="sm" color="green.dark">
                    Besoin d'informations supplémentaires ?
                  </Heading>
                  <Text fontSize="sm" color="gray.700">
                    Contactez notre équipe commerciale pour obtenir un devis personnalisé,
                    des conseils techniques ou organiser une démonstration.
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
