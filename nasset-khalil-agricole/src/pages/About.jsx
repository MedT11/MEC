import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Icon,
  Flex,
  Image,
} from '@chakra-ui/react'
import { FaLeaf, FaTractor, FaHandshake, FaAward, FaUsers, FaCheckCircle } from 'react-icons/fa'

export default function About() {
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
              Notre Histoire
            </Badge>
            <Heading
              fontSize={{ base: '3xl', md: '5xl' }}
              textAlign="center"
            >
              À Propos de Nous
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              textAlign="center"
              maxW="2xl"
              opacity={0.9}
            >
              CENTRALE POMPE TUNISIE
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Company Story */}
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
          <Box>
            <Badge colorScheme="green" mb={4} fontSize="sm" px={3} py={1}>
              Notre Mission
            </Badge>
            <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={6} color="green.dark">
              Votre Partenaire de Confiance en Équipements Agricoles
            </Heading>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg" color="gray.600" lineHeight="tall">
                Centrale Pompe Tunisie est spécialisée dans la vente d'équipements
                agricoles de haute qualité. Nous nous engageons à fournir aux agriculteurs tunisiens
                les meilleurs outils pour améliorer leur productivité.
              </Text>
              <Text fontSize="lg" color="gray.600" lineHeight="tall">
                Avec des années d'expérience dans le secteur, nous comprenons les défis uniques
                de l'agriculture en Tunisie et proposons des solutions adaptées aux besoins locaux.
              </Text>
              <Text fontSize="lg" color="gray.600" lineHeight="tall">
                Notre engagement envers la qualité, le service client et l'innovation fait de nous
                le choix privilégié pour les professionnels de l'agriculture.
              </Text>
            </VStack>
          </Box>
          <Box
            bg="gray.200"
            borderRadius="xl"
            h="400px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={FaTractor} w={40} h={40} color="gray.400" />
          </Box>
        </SimpleGrid>
      </Container>

      {/* Values Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} mb={12}>
            <Badge colorScheme="green" fontSize="sm" px={3} py={1} borderRadius="full">
              Nos Valeurs
            </Badge>
            <Heading
              textAlign="center"
              fontSize={{ base: '2xl', md: '4xl' }}
              color="green.dark"
            >
              Ce Qui Nous Distingue
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {[
              {
                icon: FaAward,
                title: "Qualité",
                description: "Nous sélectionnons uniquement des équipements de marques reconnues pour leur fiabilité et leur durabilité."
              },
              {
                icon: FaHandshake,
                title: "Confiance",
                description: "Notre réputation repose sur la confiance que nos clients nous accordent depuis des années."
              },
              {
                icon: FaUsers,
                title: "Service Client",
                description: "Une équipe dédiée pour vous conseiller et vous accompagner dans le choix de vos équipements."
              },
              {
                icon: FaLeaf,
                title: "Engagement",
                description: "Nous soutenons le développement de l'agriculture durable en Algérie."
              }
            ].map((value, index) => (
              <VStack
                key={index}
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="md"
                spacing={4}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'xl',
                }}
              >
                <Icon as={value.icon} w={12} h={12} color="green.600" />
                <Heading size="md" textAlign="center" color="green.dark">
                  {value.title}
                </Heading>
                <Text textAlign="center" color="gray.600">
                  {value.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} mb={12}>
          <Badge colorScheme="green" fontSize="sm" px={3} py={1} borderRadius="full">
            Nos Avantages
          </Badge>
          <Heading
            textAlign="center"
            fontSize={{ base: '2xl', md: '4xl' }}
            color="green.dark"
          >
            Pourquoi Nous Choisir ?
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {[
            {
              title: "Large Gamme de Produits",
              description: "Du pompage d'eau aux tracteurs, nous offrons une sélection complète d'équipements agricoles."
            },
            {
              title: "Expertise Technique",
              description: "Notre équipe possède une connaissance approfondie de chaque produit pour vous guider."
            },
            {
              title: "Prix Compétitifs",
              description: "Nous négocions les meilleurs prix avec nos fournisseurs pour vous offrir des tarifs avantageux."
            },
            {
              title: "Garantie et SAV",
              description: "Tous nos produits sont garantis et bénéficient d'un service après-vente réactif."
            },
            {
              title: "Livraison Nationale",
              description: "Nous livrons partout en Algérie avec un service logistique fiable."
            },
            {
              title: "Conseil Personnalisé",
              description: "Nous prenons le temps de comprendre vos besoins pour vous proposer la meilleure solution."
            }
          ].map((item, index) => (
            <HStack
              key={index}
              align="start"
              bg="white"
              p={6}
              borderRadius="lg"
              boxShadow="sm"
              border="1px"
              borderColor="gray.200"
              spacing={4}
            >
              <Icon as={FaCheckCircle} color="green.500" w={6} h={6} flexShrink={0} mt={1} />
              <VStack align="start" spacing={2}>
                <Heading size="sm" color="green.dark">
                  {item.title}
                </Heading>
                <Text color="gray.600" fontSize="sm">
                  {item.description}
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>

      {/* Stats Section */}
      <Box bg="green.dark" color="white" py={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            {[
              { value: "10+", label: "Années d'Expérience" },
              { value: "500+", label: "Clients Satisfaits" },
              { value: "50+", label: "Produits Disponibles" },
              { value: "24/7", label: "Support Client" }
            ].map((stat, index) => (
              <VStack key={index} spacing={2}>
                <Heading fontSize={{ base: '3xl', md: '4xl' }} color="white">
                  {stat.value}
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'md' }} textAlign="center" opacity={0.9}>
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} mb={12}>
          <Badge colorScheme="green" fontSize="sm" px={3} py={1} borderRadius="full">
            Notre Équipe
          </Badge>
          <Heading
            textAlign="center"
            fontSize={{ base: '2xl', md: '4xl' }}
            color="green.dark"
          >
            Une Équipe Dédiée à Votre Réussite
          </Heading>
          <Text textAlign="center" fontSize="lg" color="gray.600" maxW="2xl">
            Notre équipe de professionnels est à votre disposition pour vous conseiller
            et vous accompagner dans tous vos projets agricoles.
          </Text>
        </VStack>

        <Box
          bg="green.50"
          p={8}
          borderRadius="xl"
          border="2px"
          borderColor="green.200"
          textAlign="center"
        >
          <Icon as={FaUsers} w={16} h={16} color="green.600" mb={4} />
          <Heading size="lg" mb={4} color="green.dark">
            Contactez Notre Équipe
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={4}>
            Pour toute question ou demande de renseignements, n'hésitez pas à nous contacter.
            Nous sommes là pour vous aider à choisir les meilleurs équipements pour votre exploitation.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
