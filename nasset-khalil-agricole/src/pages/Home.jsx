import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  HStack,
  Badge,
  Icon,
  useDisclosure,
  Flex,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { FaArrowRight, FaPhone, FaCheckCircle, FaCog, FaTint, FaStar, FaTractor } from 'react-icons/fa'
import { products } from '../data/products'
import ProductModal from '../components/ProductModal'
import heroImage from '../../public/HEROPAGENEW.png'
import caprariImage from '../../public/CAPRARI P.P.png'

export default function Home() {
  const featuredProducts = products.filter(p => p.featured)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      {/* Hero Section - Clean & Simple */}
      <Box
        position="relative"
        overflow="hidden"
        minH={{ base: '75vh', md: '85vh' }}
        display="flex"
        alignItems="flex-end"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={`url('${heroImage}')`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          _after={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'blackAlpha.300',
          }}
        />
        <Container maxW="container.xl" position="relative" zIndex={1} pb={{ base: 4, md: 8 }} px={{ base: 4, md: 6 }}>
          <VStack spacing={6} align="center" textAlign="center">
            <HStack spacing={{ base: 2, md: 4 }} justifyContent="center" flexWrap="wrap">
              <Button
                as={RouterLink}
                to="/products"
                size={{ base: 'md', md: 'lg' }}
                bg="white"
                color="green.dark"
                px={{ base: 6, md: 10 }}
                py={{ base: 5, md: 7 }}
                fontSize={{ base: 'sm', md: 'lg' }}
                rightIcon={<FaArrowRight />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '2xl',
                }}
              >
                Nos Produits
              </Button>
              <Button
                as={RouterLink}
                to="/contact"
                size={{ base: 'md', md: 'lg' }}
                variant="outline"
                color="white"
                borderColor="white"
                borderWidth="2px"
                px={{ base: 6, md: 10 }}
                py={{ base: 5, md: 7 }}
                fontSize={{ base: 'sm', md: 'lg' }}
                leftIcon={<FaPhone />}
                _hover={{
                  bg: 'whiteAlpha.200',
                  borderColor: 'white',
                }}
              >
                Contact
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Product Categories Section */}
      <Box py={20} bg="white">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4}>
              <Heading
                textAlign="center"
                fontSize={{ base: '3xl', md: '5xl' }}
                color="green.dark"
              >
                Nos Catégories de Produits
              </Heading>
              <Text textAlign="center" fontSize="xl" color="gray.600" maxW="2xl">
                Découvrez notre gamme complète d'équipements professionnels
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {/* Moteurs Category */}
              <Box
                bg="gradient.to-br"
                bgGradient="linear(to-br, blue.50, blue.100)"
                p={10}
                borderRadius="2xl"
                boxShadow="lg"
                border="2px"
                borderColor="blue.200"
                transition="all 0.3s"
                cursor="pointer"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl',
                  borderColor: 'blue.400',
                }}
                onClick={() => window.location.href = '/products'}
              >
                <VStack spacing={6}>
                  <Icon as={FaCog} w={16} h={16} color="blue.600" />
                  <Heading size="lg" color="blue.700">
                    Moteurs
                  </Heading>
                  <Text textAlign="center" color="gray.700" fontSize="md">
                    Moteurs submersibles haute performance pour pompes immergées
                  </Text>
                  <Button
                    colorScheme="blue"
                    rightIcon={<FaArrowRight />}
                    size="md"
                    as={RouterLink}
                    to="/products"
                  >
                    Découvrir
                  </Button>
                </VStack>
              </Box>

              {/* Hydraulique Category */}
              <Box
                bg="gradient.to-br"
                bgGradient="linear(to-br, cyan.50, cyan.100)"
                p={10}
                borderRadius="2xl"
                boxShadow="lg"
                border="2px"
                borderColor="cyan.200"
                transition="all 0.3s"
                cursor="pointer"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl',
                  borderColor: 'cyan.400',
                }}
                onClick={() => window.location.href = '/products'}
              >
                <VStack spacing={6}>
                  <Icon as={FaTint} w={16} h={16} color="cyan.600" />
                  <Heading size="lg" color="cyan.700">
                    Hydraulique
                  </Heading>
                  <Text textAlign="center" color="gray.700" fontSize="md">
                    Systèmes hydrauliques et pompes pour irrigation
                  </Text>
                  <Button
                    colorScheme="cyan"
                    rightIcon={<FaArrowRight />}
                    size="md"
                    as={RouterLink}
                    to="/products"
                  >
                    Découvrir
                  </Button>
                </VStack>
              </Box>

              {/* Promotions/Exclusivités Category */}
              <Box
                bg="gradient.to-br"
                bgGradient="linear(to-br, purple.50, purple.100)"
                p={10}
                borderRadius="2xl"
                boxShadow="lg"
                border="2px"
                borderColor="purple.200"
                transition="all 0.3s"
                cursor="pointer"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl',
                  borderColor: 'purple.400',
                }}
                onClick={() => window.location.href = '/products'}
              >
                <VStack spacing={6}>
                  <Icon as={FaStar} w={16} h={16} color="purple.600" />
                  <Heading size="lg" color="purple.700">
                    Exclusivités
                  </Heading>
                  <Text textAlign="center" color="gray.700" fontSize="md">
                    Offres spéciales et produits exclusifs
                  </Text>
                  <Button
                    colorScheme="purple"
                    rightIcon={<FaArrowRight />}
                    size="md"
                    as={RouterLink}
                    to="/products"
                  >
                    Découvrir
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <Box py={20} bg="gray.50">
          <Container maxW="container.xl">
            <VStack spacing={12}>
              <VStack spacing={4}>
                <Badge colorScheme="red" fontSize="md" px={4} py={2} borderRadius="full">
                  Notre Sélection
                </Badge>
                <Heading
                  textAlign="center"
                  fontSize={{ base: '3xl', md: '5xl' }}
                  color="green.dark"
                >
                  Notre Offre Spéciale
                </Heading>
                <Text textAlign="center" fontSize="xl" color="gray.600" maxW="2xl">
                  Découvrez nos meilleures offres et produits exclusifs
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: featuredProducts.length > 2 ? 3 : 2 }} spacing={8} w="full">
                {featuredProducts.map((product) => (
                  <Box
                    key={product.id}
                    bg="white"
                    borderRadius="2xl"
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
                          p={6}
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
                          fontSize="lg"
                          px={4}
                          py={2}
                          borderRadius="lg"
                        >
                          {product.badge}
                        </Badge>
                      )}
                    </Box>
                    <VStack p={8} align="start" spacing={4}>
                      <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
                        {product.category}
                      </Badge>
                      <Heading size="md" color="green.dark" minH="60px">
                        {product.name}
                      </Heading>
                      <Text color="gray.600" fontSize="md" noOfLines={3}>
                        {product.shortDescription}
                      </Text>
                      <Button
                        colorScheme="green"
                        width="full"
                        size="lg"
                        rightIcon={<FaArrowRight />}
                        onClick={() => {
                          setSelectedProduct(product)
                          onOpen()
                        }}
                      >
                        Voir détails
                      </Button>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>
      )}

      {/* CAPRARI Brand Section - Simplified */}
      <Box py={20} bg="white">
        <Container maxW="container.xl">
          <Box
            bg="white"
            borderRadius="3xl"
            boxShadow="2xl"
            overflow="hidden"
            border="1px"
            borderColor="gray.200"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
              <Flex
                bgGradient="linear(to-br, blue.600, blue.700)"
                align="center"
                justify="center"
                p={12}
                position="relative"
              >
                <Image
                  src={caprariImage}
                  alt="CAPRARI Excellence"
                  objectFit="contain"
                  maxH="400px"
                  maxW="100%"
                />
              </Flex>

              <VStack align="stretch" spacing={8} p={12} bg="gray.50">
                <VStack align="start" spacing={4}>
                  <Heading size="xl" color="green.dark">
                    Excellence Italienne
                  </Heading>
                  <Text color="gray.700" fontSize="lg" lineHeight="tall">
                    Leader mondial en pompes immergées depuis plus de 100 ans
                  </Text>
                </VStack>

                <VStack align="start" spacing={4}>
                  {[
                    'Technologie de pointe italienne',
                    'Performance et durabilité optimales',
                    'Service après-vente professionnel'
                  ].map((feature, index) => (
                    <HStack key={index} spacing={4}>
                      <Icon as={FaCheckCircle} color="green.500" boxSize={6} />
                      <Text color="gray.700" fontSize="lg" fontWeight="medium">
                        {feature}
                      </Text>
                    </HStack>
                  ))}
                </VStack>

                <Button
                  as={RouterLink}
                  to="/products"
                  colorScheme="blue"
                  size="lg"
                  rightIcon={<FaArrowRight />}
                  mt={4}
                >
                  Découvrir CAPRARI
                </Button>
              </VStack>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="green.dark" color="white" py={16}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={8}
          >
            <VStack align={{ base: 'center', md: 'start' }} spacing={4} flex={1} textAlign={{ base: 'center', md: 'left' }}>
              <Heading fontSize={{ base: '2xl', md: '3xl' }}>
                Besoin de conseils ?
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} opacity={0.9}>
                Notre équipe d'experts est à votre disposition pour vous conseiller
              </Text>
            </VStack>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              bg="white"
              color="green.dark"
              px={10}
              py={7}
              fontSize="lg"
              leftIcon={<FaPhone />}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '2xl',
              }}
            >
              Contactez-nous
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Product Detail Modal */}
      <ProductModal isOpen={isOpen} onClose={onClose} product={selectedProduct} />
    </Box>
  )
}
