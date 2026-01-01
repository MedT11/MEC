import { useParams, Link as RouterLink } from 'react-router-dom'
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { FaTractor, FaPhone, FaArrowLeft, FaCheckCircle, FaChevronRight } from 'react-icons/fa'
import { products } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <Container maxW="container.xl" py={16}>
        <VStack spacing={6}>
          <Icon as={FaTractor} w={20} h={20} color="gray.300" />
          <Heading>Produit non trouvé</Heading>
          <Button as={RouterLink} to="/products" colorScheme="green">
            Retour aux produits
          </Button>
        </VStack>
      </Container>
    )
  }

  return (
    <Box>
      {/* Breadcrumb */}
      <Box bg="gray.50" py={4}>
        <Container maxW="container.xl">
          <Breadcrumb spacing="8px" separator={<Icon as={FaChevronRight} color="gray.500" />}>
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/products">Produits</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{product.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>

      {/* Product Detail */}
      <Container maxW="container.xl" py={12}>
        <Button
          as={RouterLink}
          to="/products"
          leftIcon={<FaArrowLeft />}
          variant="ghost"
          mb={6}
        >
          Retour aux produits
        </Button>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          {/* Product Image */}
          <Box>
            <Box
              bg="gray.200"
              borderRadius="xl"
              overflow="hidden"
              h={{ base: '300px', md: '500px' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Icon as={FaTractor} w={40} h={40} color="gray.400" />
              {product.featured && (
                <Badge
                  position="absolute"
                  top={6}
                  right={6}
                  colorScheme="green"
                  fontSize="md"
                  px={3}
                  py={1}
                >
                  Populaire
                </Badge>
              )}
            </Box>
          </Box>

          {/* Product Info */}
          <VStack align="start" spacing={6}>
            <Badge colorScheme="green" fontSize="md" px={3} py={1}>
              {product.category}
            </Badge>
            
            <Heading
              fontSize={{ base: '2xl', md: '4xl' }}
              color="green.dark"
            >
              {product.name}
            </Heading>

            <Text fontSize="lg" color="gray.600" lineHeight="tall">
              {product.description}
            </Text>

            <Divider />

            <VStack align="start" spacing={3} w="full">
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="semibold">Garantie incluse</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="semibold">Service après-vente</Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="green.500" />
                <Text fontWeight="semibold">Livraison disponible</Text>
              </HStack>
            </VStack>

            <Divider />

            <Box w="full">
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                colorScheme="green"
                w="full"
                leftIcon={<FaPhone />}
              >
                Contacter pour commander
              </Button>
              <Text fontSize="sm" color="gray.500" mt={2} textAlign="center">
                Contactez notre équipe pour obtenir un devis personnalisé
              </Text>
            </Box>
          </VStack>
        </SimpleGrid>

        {/* Technical Specifications */}
        <Box mt={16}>
          <Heading size="lg" mb={6} color="green.dark">
            Fiche Technique
          </Heading>
          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            overflow="hidden"
            border="1px"
            borderColor="gray.200"
          >
            <TableContainer>
              <Table variant="simple">
                <Thead bg="green.50">
                  <Tr>
                    <Th color="green.dark" fontSize="md">Caractéristique</Th>
                    <Th color="green.dark" fontSize="md">Valeur</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Object.entries(product.fichetechnique).map(([key, value], index) => (
                    <Tr key={key} bg={index % 2 === 0 ? 'white' : 'gray.50'}>
                      <Td fontWeight="semibold" textTransform="capitalize" fontSize="md">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Td>
                      <Td fontSize="md" color="gray.700">{value}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        {/* Additional Info */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={12}>
          <Box
            bg="green.50"
            p={6}
            borderRadius="lg"
            border="1px"
            borderColor="green.200"
          >
            <Heading size="md" mb={3} color="green.dark">
              Garantie
            </Heading>
            <Text color="gray.600">
              Tous nos produits sont couverts par une garantie constructeur.
              Demandez les détails lors de votre commande.
            </Text>
          </Box>

          <Box
            bg="green.50"
            p={6}
            borderRadius="lg"
            border="1px"
            borderColor="green.200"
          >
            <Heading size="md" mb={3} color="green.dark">
              Livraison
            </Heading>
            <Text color="gray.600">
              Nous assurons la livraison de nos équipements partout en Tunisie.
              Délais et frais selon votre localisation.
            </Text>
          </Box>

          <Box
            bg="green.50"
            p={6}
            borderRadius="lg"
            border="1px"
            borderColor="green.200"
          >
            <Heading size="md" mb={3} color="green.dark">
              Installation
            </Heading>
            <Text color="gray.600">
              Service d'installation et de mise en service disponible.
              Notre équipe technique vous accompagne.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Related Products or CTA */}
      <Box bg="green.dark" color="white" py={16} mt={12}>
        <Container maxW="container.xl">
          <VStack spacing={6}>
            <Heading fontSize={{ base: '2xl', md: '3xl' }} textAlign="center">
              Intéressé par ce produit ?
            </Heading>
            <Text fontSize="lg" textAlign="center" maxW="2xl" opacity={0.9}>
              Contactez-nous dès maintenant pour obtenir plus d'informations et un devis personnalisé
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              bg="white"
              color="green.dark"
              leftIcon={<FaPhone />}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'xl',
              }}
            >
              Demander un devis
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
