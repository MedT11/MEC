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
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaPaperPlane, FaFacebook } from 'react-icons/fa'

export default function Contact() {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    toast({
      title: 'Message envoyé!',
      description: 'Nous vous répondrons dans les plus brefs délais.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <Box>
      {/* Header Section */}
      <Box
        bgGradient="linear(to-r, green.dark, green.600)"
        color="white"
        py={16}
      >
        <Container maxW="container.xl">
          <VStack spacing={4}>
            <Badge colorScheme="green" bg="whiteAlpha.300" fontSize="sm" px={3} py={1} borderRadius="full">
              Contactez-nous
            </Badge>
            <Heading
              fontSize={{ base: '3xl', md: '5xl' }}
              textAlign="center"
            >
              Nous Sommes à Votre Écoute
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              textAlign="center"
              maxW="2xl"
              opacity={0.9}
            >
              Une question ? Un projet ? Contactez notre équipe pour obtenir des conseils personnalisés
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={16}>
          <VStack
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="md"
            spacing={4}
            border="1px"
            borderColor="gray.200"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'xl',
            }}
          >
            <Icon as={FaPhone} w={10} h={10} color="green.600" />
            <Heading size="md" color="green.dark">
              Téléphone
            </Heading>
            <VStack spacing={1}>
              <Text fontWeight="semibold" fontSize="lg">+213 XXX XXX XXX</Text>
              <Text fontSize="sm" color="gray.600">Lun - Sam: 8h - 18h</Text>
            </VStack>
          </VStack>

          <VStack
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="md"
            spacing={4}
            border="1px"
            borderColor="gray.200"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'xl',
            }}
          >
            <Icon as={FaEnvelope} w={10} h={10} color="green.600" />
            <Heading size="md" color="green.dark">
              Email
            </Heading>
            <VStack spacing={1}>
              <Text fontWeight="semibold" fontSize="lg">contact@nasset-khalil.dz</Text>
              <Text fontSize="sm" color="gray.600">Réponse sous 24h</Text>
            </VStack>
          </VStack>

          <VStack
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="md"
            spacing={4}
            border="1px"
            borderColor="gray.200"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'xl',
            }}
          >
            <Icon as={FaMapMarkerAlt} w={10} h={10} color="green.600" />
            <Heading size="md" color="green.dark">
              Adresse
            </Heading>
            <VStack spacing={1}>
              <Text fontWeight="semibold" fontSize="lg" textAlign="center">Tunisie</Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">Venez nous rendre visite</Text>
            </VStack>
          </VStack>

          <VStack
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="md"
            spacing={4}
            border="1px"
            borderColor="gray.200"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'xl',
            }}
          >
            <Icon as={FaClock} w={10} h={10} color="green.600" />
            <Heading size="md" color="green.dark">
              Horaires
            </Heading>
            <VStack spacing={1}>
              <Text fontWeight="semibold" fontSize="lg">Lun - Sam</Text>
              <Text fontSize="sm" color="gray.600">8h00 - 18h00</Text>
              <Text fontSize="sm" color="gray.600">Dimanche: Fermé</Text>
            </VStack>
          </VStack>
        </SimpleGrid>

        {/* Contact Form and CEO Info */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          {/* Contact Form */}
          <Box
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            border="1px"
            borderColor="gray.200"
          >
            <VStack spacing={6} align="start">
              <VStack align="start" spacing={2}>
                <Heading size="lg" color="green.dark">
                  Envoyez-nous un Message
                </Heading>
                <Text color="gray.600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                </Text>
              </VStack>

              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <VStack spacing={4} w="full">
                  <FormControl isRequired>
                    <FormLabel>Nom complet</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      size="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      size="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Téléphone</FormLabel>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+213 XXX XXX XXX"
                      size="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Sujet</FormLabel>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      size="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={6}
                      size="lg"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="green"
                    size="lg"
                    w="full"
                    rightIcon={<FaPaperPlane />}
                  >
                    Envoyer le message
                  </Button>
                </VStack>
              </form>
            </VStack>
          </Box>

          {/* CEO Contact Info */}
          <VStack spacing={6} align="stretch">
            <Box
              bg="green.50"
              p={8}
              borderRadius="xl"
              border="2px"
              borderColor="green.200"
            >
              <VStack spacing={4} align="start">
                <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
                  Contact Direct
                </Badge>
                <Heading size="lg" color="green.dark">
                  Contactez le Directeur
                </Heading>
                <Text color="gray.600" fontSize="lg">
                  Pour des demandes urgentes ou des projets importants, contactez directement
                  notre direction.
                </Text>

                <VStack align="start" spacing={3} pt={4} w="full">
                  <HStack>
                    <Icon as={FaUser} color="green.600" />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="semibold">M. NASSET / M. KHALIL</Text>
                      <Text fontSize="sm" color="gray.600">Directeurs</Text>
                    </VStack>
                  </HStack>

                  <HStack>
                    <Icon as={FaPhone} color="green.600" />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="semibold">+213 XXX XXX XXX</Text>
                      <Text fontSize="sm" color="gray.600">Ligne directe</Text>
                    </VStack>
                  </HStack>

                  <HStack>
                    <Icon as={FaEnvelope} color="green.600" />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="semibold">direction@nasset-khalil.dz</Text>
                      <Text fontSize="sm" color="gray.600">Email professionnel</Text>
                    </VStack>
                  </HStack>
                </VStack>
              </VStack>
            </Box>

            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="md"
              border="1px"
              borderColor="gray.200"
            >
              <VStack spacing={4} align="start">
                <Heading size="md" color="green.dark">
                  Service Commercial
                </Heading>
                <Text color="gray.600">
                  Notre équipe commerciale est à votre disposition pour :
                </Text>
                <VStack align="start" spacing={2} pl={4}>
                  <HStack>
                    <Box w={2} h={2} bg="green.500" borderRadius="full" />
                    <Text fontSize="sm">Devis personnalisés</Text>
                  </HStack>
                  <HStack>
                    <Box w={2} h={2} bg="green.500" borderRadius="full" />
                    <Text fontSize="sm">Conseils techniques</Text>
                  </HStack>
                  <HStack>
                    <Box w={2} h={2} bg="green.500" borderRadius="full" />
                    <Text fontSize="sm">Démonstrations produits</Text>
                  </HStack>
                  <HStack>
                    <Box w={2} h={2} bg="green.500" borderRadius="full" />
                    <Text fontSize="sm">Solutions sur mesure</Text>
                  </HStack>
                </VStack>
              </VStack>
            </Box>

            <Box
              bg="green.dark"
              color="white"
              p={8}
              borderRadius="xl"
            >
              <VStack spacing={4} align="start">
                <Heading size="md">
                  Demande de Devis
                </Heading>
                <Text opacity={0.9}>
                  Intéressé par l'un de nos produits ? Demandez un devis gratuit et sans engagement.
                </Text>
                <Button
                  bg="white"
                  color="green.dark"
                  size="lg"
                  w="full"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'xl',
                  }}
                >
                  Demander un devis
                </Button>
              </VStack>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Map Section */}
      <Box bg="gray.200" h="400px" position="relative">
        <Container maxW="container.xl" h="full" display="flex" alignItems="center" justifyContent="center">
          <VStack spacing={4} bg="white" p={8} borderRadius="xl" boxShadow="xl">
            <Icon as={FaMapMarkerAlt} w={12} h={12} color="green.600" />
            <Heading size="lg" color="green.dark">
              Notre Emplacement
            </Heading>
            <Text color="gray.600" textAlign="center">
              Visitez notre showroom pour découvrir nos produits
            </Text>
            <Text fontWeight="semibold" color="green.dark">
              Tunisie
            </Text>
            <HStack spacing={4} pt={4}>
              <Button
                as="a"
                href="https://www.facebook.com/share/1Cnzqtb5ow/"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<Icon as={FaFacebook} />}
                colorScheme="facebook"
                size="lg"
              >
                Suivez-nous sur Facebook
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
