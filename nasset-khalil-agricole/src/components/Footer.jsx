import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaLeaf } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

export default function Footer() {
  return (
    <Box
      bg="green.dark"
      color="white"
      mt="auto"
    >
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {/* Company Info */}
          <Stack spacing={4}>
            <HStack spacing={3}>
              <Box
                w="45px"
                h="45px"
                borderRadius="md"
                overflow="hidden"
                bg="white"
                p={1}
              >
                <img 
                  src="/logo.png" 
                  alt="Centrale Pompe Tunisie" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
              <Text fontSize="lg" fontWeight="bold">CENTRALE POMPE TUNISIE</Text>
            </HStack>
            <Text fontSize="sm" color="whiteAlpha.800">
              Centrale Pompe Tunisie
            </Text>
            <Text fontSize="sm" color="whiteAlpha.800">
              Votre partenaire de confiance pour l'équipement agricole de qualité.
            </Text>
            <HStack spacing={4} pt={2}>
              <Link href="#" isExternal>
                <Icon as={FaFacebook} w={5} h={5} _hover={{ color: 'green.300' }} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaInstagram} w={5} h={5} _hover={{ color: 'green.300' }} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaLinkedin} w={5} h={5} _hover={{ color: 'green.300' }} />
              </Link>
            </HStack>
          </Stack>

          {/* Quick Links */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="semibold">Liens Rapides</Text>
            <Stack spacing={2}>
              <Link as={RouterLink} to="/" fontSize="sm" _hover={{ color: 'green.300' }}>
                Accueil
              </Link>
              <Link as={RouterLink} to="/products" fontSize="sm" _hover={{ color: 'green.300' }}>
                Nos Produits
              </Link>
              <Link as={RouterLink} to="/about" fontSize="sm" _hover={{ color: 'green.300' }}>
                À Propos
              </Link>
              <Link as={RouterLink} to="/contact" fontSize="sm" _hover={{ color: 'green.300' }}>
                Contact
              </Link>
            </Stack>
          </Stack>

          {/* Products */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="semibold">Nos Produits</Text>
            <Stack spacing={2}>
              <Text fontSize="sm" color="whiteAlpha.800">Pompage d'eau</Text>
              <Text fontSize="sm" color="whiteAlpha.800">Machines agricoles</Text>
              <Text fontSize="sm" color="whiteAlpha.800">Équipements d'irrigation</Text>
              <Text fontSize="sm" color="whiteAlpha.800">Outils de ferme</Text>
            </Stack>
          </Stack>

          {/* Contact */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="semibold">Contact</Text>
            <Stack spacing={2}>
              <HStack align="start">
                <Icon as={FaPhone} mt={1} />
                <Text fontSize="sm">+213 XXX XXX XXX</Text>
              </HStack>
              <HStack align="start">
                <Icon as={FaEnvelope} mt={1} />
                <Text fontSize="sm">contact@nasset-khalil.dz</Text>
              </HStack>
              <HStack align="start">
                <Icon as={FaMapMarkerAlt} mt={1} />
                <Text fontSize="sm">Tunisie</Text>
              </HStack>
            </Stack>
            <HStack spacing={4} pt={2}>
              <Link 
                href="https://www.facebook.com/share/1Cnzqtb5ow/" 
                isExternal
                _hover={{ color: 'blue.300' }}
                transition="color 0.2s"
              >
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
            </HStack>
          </Stack>
        </SimpleGrid>

        <Divider my={6} borderColor="whiteAlpha.300" />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          fontSize="sm"
          color="whiteAlpha.700"
        >
          <Text>© 2024 Centrale Pompe Tunisie. Tous droits réservés.</Text>
          <HStack spacing={4} mt={{ base: 4, md: 0 }}>
            <Link href="#">Politique de confidentialité</Link>
            <Link href="#">Conditions d'utilisation</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
