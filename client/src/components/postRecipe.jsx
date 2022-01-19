import React from 'react'
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Icon,
  Button,
  VisuallyHidden,
  Select,
} from '@chakra-ui/react'

export default function PostRecipe() {
  return (
    <Box bg={useColorModeValue('gray.50', 'inherit')} p={10}>
      <Box visibility={{ base: 'hidden', sm: 'visible' }} aria-hidden='true'>
        <Box py={5}>
          <Box
            borderTop='solid 1px'
            borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
          ></Box>
        </Box>
      </Box>
      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: 'initial', md: 'grid' }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              method='POST'
              shadow='base'
              rounded={[null, 'md']}
              overflow={{ sm: 'hidden' }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor='first_name'
                      fontSize='sm'
                      fontWeight='md'
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Tilte
                    </FormLabel>
                    <Input
                      type='text'
                      name='first_name'
                      id='first_name'
                      autoComplete='given-name'
                      mt={1}
                      focusBorderColor='brand.400'
                      shadow='sm'
                      size='sm'
                      w='full'
                      rounded='md'
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor='country'
                      fontSize='sm'
                      fontWeight='md'
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Cuisine
                    </FormLabel>
                    <Select
                      id='country'
                      name='country'
                      autoComplete='country'
                      placeholder='Select option'
                      mt={1}
                      focusBorderColor='brand.400'
                      shadow='sm'
                      size='sm'
                      w='full'
                      rounded='md'
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </Select>
                  </FormControl>

                  <FormControl id='email' mt={1} as={GridItem} colSpan={[6, 6]}>
                    <FormLabel
                      fontSize='sm'
                      fontWeight='md'
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Decription
                    </FormLabel>
                    <Textarea
                      placeholder='A brief description for your recipe......'
                      mt={1}
                      rows={4}
                      shadow='sm'
                      focusBorderColor='brand.400'
                      fontSize={{ sm: 'sm' }}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor='street_address'
                      fontSize='sm'
                      fontWeight='md'
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Ingredients
                    </FormLabel>
                    <FormHelperText>
                      type a comma after every ingredient so they can get
                      seperated
                    </FormHelperText>
                    <Input
                      placeholder='eg.( tomato, potato, sugar, etc.....)'
                      type='text'
                      name='street_address'
                      id='street_address'
                      autoComplete='street-address'
                      mt={1}
                      focusBorderColor='brand.400'
                      shadow='sm'
                      size='sm'
                      w='full'
                      rounded='md'
                    />
                  </FormControl>
                  <FormControl id='email' mt={1} as={GridItem} colSpan={[6, 6]}>
                    <FormLabel
                      fontSize='sm'
                      fontWeight='md'
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Steps
                    </FormLabel>
                    <Textarea
                      placeholder='A brief description for your recipe......'
                      mt={1}
                      rows={4}
                      shadow='sm'
                      focusBorderColor='brand.400'
                      fontSize={{ sm: 'sm' }}
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      fontSize='sm'
                      fontWeight='md'
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Cover photo
                    </FormLabel>
                    <Flex
                      mt={1}
                      justify='center'
                      px={7}
                      pt={6}
                      pb={12}
                      borderWidth={2}
                      borderColor={useColorModeValue('gray.300', 'gray.500')}
                      borderStyle='dashed'
                      rounded='md'
                    >
                      <Stack spacing={1} textAlign='center'>
                        <Icon
                          mx='auto'
                          boxSize={12}
                          color={useColorModeValue('gray.400', 'gray.500')}
                          stroke='currentColor'
                          fill='none'
                          viewBox='0 0 48 48'
                          aria-hidden='true'
                        >
                          <path
                            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </Icon>
                        <Flex
                          fontSize='sm'
                          color={useColorModeValue('gray.600', 'gray.400')}
                          alignItems='baseline'
                        >
                          <chakra.label
                            htmlFor='file-upload'
                            cursor='pointer'
                            rounded='md'
                            fontSize='md'
                            color={useColorModeValue('brand.600', 'brand.200')}
                            pos='relative'
                            _hover={{
                              color: useColorModeValue(
                                'brand.400',
                                'brand.300'
                              ),
                            }}
                          >
                            <span>Upload a file</span>
                            <VisuallyHidden>
                              <input
                                id='file-upload'
                                name='file-upload'
                                type='file'
                              />
                            </VisuallyHidden>
                          </chakra.label>
                          <Text pl={1}>or drag and drop</Text>
                        </Flex>
                        <Text
                          fontSize='xs'
                          color={useColorModeValue('gray.500', 'gray.50')}
                        >
                          PNG, JPG, GIF up to 10MB
                        </Text>
                      </Stack>
                    </Flex>
                  </FormControl>
                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor='street_address'
                      fontSize='sm'
                      fontWeight='md'
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Tags
                    </FormLabel>
                    <FormHelperText>
                      type a comma after every ingredient so they can get
                      seperated
                    </FormHelperText>
                    <Input
                      placeholder='eg.( tomato, potato, sugar, etc.....)'
                      type='text'
                      name='street_address'
                      id='street_address'
                      autoComplete='street-address'
                      mt={1}
                      focusBorderColor='brand.400'
                      shadow='sm'
                      size='sm'
                      w='full'
                      rounded='md'
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign='right'
              >
                <Button
                  type='submit'
                //   colorScheme='brand.'
                  _focus={{ shadow: '' }}
                  fontWeight='md'
                >
                  Save
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box visibility={{ base: 'hidden', sm: 'visible' }} aria-hidden='true'>
        <Box py={5}>
          <Box
            borderTop='solid 1px'
            borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
          ></Box>
        </Box>
      </Box>
    </Box>
  )
}
