import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Button,
  Icon,
  Image,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import { FaTractor, FaArrowRight, FaCog, FaTint, FaStar, FaPhone } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { products } from '../data/products'
import ProductModal from '../components/ProductModal'

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Filter products by type
  const moteurProducts = products.filter(p => p.productType === 'moteur')
  const hydrauliqueProducts = products.filter(p => p.productType === 'hydraulique')
  const promotionProducts = products.filter(p => p.badge) // Products with badges

  const ProductCard = ({ product }) => (
    <Box
      bg="white"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
      }}
    >
      <Box
        h="280px"
        bg="gray.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            objectFit="contain"
            w="100%"
            h="100%"
            p={4}
          />
        ) : (
          <Icon as={FaTractor} w={24} h={24} color="gray.400" />
        )}
        {product.badge && (
          <Badge
            position="absolute"
            top={4}
            right={4}
            colorScheme={
              product.badge === "Promotion" ? "red" : 
              product.badge === "Exclusivité" ? "purple" : 
              "orange"
            }
            fontSize="md"
            px={3}
            py={2}
          >
            {product.badge}
          </Badge>
        )}
      </Box>
      <VStack p={6} align="start" spacing={4}>
        <Badge colorScheme="green" fontSize="sm">
          {product.category}
        </Badge>
        <Heading size="md" color="green.dark" minH="60px">
          {product.name}
        </Heading>
        <Text color="gray.600" fontSize="sm" noOfLines={3}>
          {product.shortDescription}
        </Text>
        <Button
          onClick={() => {
            setSelectedProduct(product)
            onOpen()
          }}
          colorScheme="green"
          width="full"
          rightIcon={<FaArrowRight />}
        >
          Voir détails
        </Button>
      </VStack>
    </Box>
  )

  return (
    <Box>
      {/* Hero Header */}
      <Box
        bgGradient="linear(to-r, green.dark, green.600)"
        color="white"
        py={20}
      >
        <Container maxW="container.xl">
          <VStack spacing={6}>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} textAlign="center">
              Nos Produits
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign="center" maxW="3xl">
              Découvrez notre gamme complète de moteurs, systèmes hydrauliques et offres exclusives
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Tabs Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="container.xl">
          <Tabs variant="enclosed" colorScheme="green" size="lg">
            <TabList mb={10} justifyContent="center" flexWrap="wrap" borderBottom="3px solid" borderColor="gray.200">
              <Tab
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
                px={8}
                py={4}
                _selected={{
                  color: 'blue.600',
                  bg: 'white',
                  borderColor: 'blue.600',
                  borderBottom: 'none',
                  borderTop: '3px solid',
                  borderTopColor: 'blue.600',
                }}
              >
                <HStack spacing={3}>
                  <Icon as={FaCog} boxSize={6} />
                  <Text>Moteurs</Text>
                  {moteurProducts.length > 0 && (
                    <Badge colorScheme="blue" fontSize="sm">{moteurProducts.length}</Badge>
                  )}
                </HStack>
              </Tab>

              <Tab
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
                px={8}
                py={4}
                _selected={{
                  color: 'cyan.600',
                  bg: 'white',
                  borderColor: 'cyan.600',
                  borderBottom: 'none',
                  borderTop: '3px solid',
                  borderTopColor: 'cyan.600',
                }}
              >
                <HStack spacing={3}>
                  <Icon as={FaTint} boxSize={6} />
                  <Text>Partie hydraulique</Text>
                  {hydrauliqueProducts.length > 0 && (
                    <Badge colorScheme="cyan" fontSize="sm">{hydrauliqueProducts.length}</Badge>
                  )}
                </HStack>
              </Tab>

              <Tab
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
                px={8}
                py={4}
                _selected={{
                  color: 'purple.600',
                  bg: 'white',
                  borderColor: 'purple.600',
                  borderBottom: 'none',
                  borderTop: '3px solid',
                  borderTopColor: 'purple.600',
                }}
              >
                <HStack spacing={3}>
                  <Icon as={FaStar} boxSize={6} />
                  <Text>Promotions</Text>
                  {promotionProducts.length > 0 && (
                    <Badge colorScheme="purple" fontSize="sm">{promotionProducts.length}</Badge>
                  )}
                </HStack>
              </Tab>
            </TabList>

            <TabPanels>
              {/* Moteurs Tab */}
              <TabPanel>
                <VStack spacing={8}>
                  <VStack spacing={4}>
                    <Heading size="xl" color="blue.700" textAlign="center">
                      Moteurs Submersibles
                    </Heading>
                    <Text fontSize="lg" color="gray.600" textAlign="center" maxW="3xl">
                      Moteurs haute performance pour pompes immergées, conçus pour une fiabilité maximale
                    </Text>
                  </VStack>

                  {moteurProducts.length > 0 ? (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
                      {moteurProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </SimpleGrid>
                  ) : (
                    <Box textAlign="center" py={12}>
                      <Icon as={FaCog} boxSize={20} color="gray.300" mb={4} />
                      <Text fontSize="xl" color="gray.500">
                        Produits bientôt disponibles
                      </Text>
                    </Box>
                  )}
                </VStack>
              </TabPanel>

              {/* Hydraulique Tab */}
              <TabPanel>
                <VStack spacing={8}>
                  <VStack spacing={4}>
                    <Heading size="xl" color="cyan.700" textAlign="center">
                      Systèmes Hydrauliques
                    </Heading>
                    <Text fontSize="lg" color="gray.600" textAlign="center" maxW="3xl">
                      Pompes et systèmes hydrauliques pour irrigation et applications agricoles
                    </Text>
                  </VStack>

                  {hydrauliqueProducts.length > 0 ? (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
                      {hydrauliqueProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </SimpleGrid>
                  ) : (
                    <Box textAlign="center" py={12}>
                      <Icon as={FaTint} boxSize={20} color="gray.300" mb={4} />
                      <Text fontSize="xl" color="gray.500">
                        Produits bientôt disponibles
                      </Text>
                    </Box>
                  )}
                </VStack>
              </TabPanel>

              {/* Promotions Tab */}
              <TabPanel>
                <VStack spacing={8}>
                  <VStack spacing={4}>
                    <Badge colorScheme="red" fontSize="lg" px={4} py={2} borderRadius="full">
                      Offres Spéciales
                    </Badge>
                    <Heading size="xl" color="purple.700" textAlign="center">
                      Promotions & Exclusivités
                    </Heading>
                    <Text fontSize="lg" color="gray.600" textAlign="center" maxW="3xl">
                      Ne manquez pas nos offres exclusives sur une sélection de produits premium
                    </Text>
                  </VStack>

                  {promotionProducts.length > 0 ? (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
                      {promotionProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </SimpleGrid>
                  ) : (
                    <Box textAlign="center" py={12}>
                      <Icon as={FaStar} boxSize={20} color="gray.300" mb={4} />
                      <Text fontSize="xl" color="gray.500">
                        Aucune promotion en cours
                      </Text>
                    </Box>
                  )}
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="green.dark" color="white" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={6}>
            <Heading fontSize={{ base: '2xl', md: '3xl' }} textAlign="center">
              Besoin d'aide pour choisir ?
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign="center" maxW="2xl">
              Nos experts sont là pour vous conseiller et vous aider à trouver le produit adapté à vos besoins
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              bg="white"
              color="green.dark"
              leftIcon={<FaPhone />}
              px={10}
              py={7}
              fontSize="lg"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '2xl',
              }}
            >
              Contactez-nous
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Product Detail Modal */}
      <ProductModal isOpen={isOpen} onClose={onClose} product={selectedProduct} />
    </Box>
  )
}
