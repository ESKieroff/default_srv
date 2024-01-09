import * as z from 'zod';

const isURL = (value: string) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
};

const urlSchema = z.string().refine((value) => isURL(value), {
  message: 'Deve ser uma URL válida',
});

const validURL = 'https://www.example.com';
const invalidURL = 'not_a_valid_url';

try {
  const validatedURL = urlSchema.parse(validURL);
  console.log('URL válida:', validatedURL);
} catch (error) {
  console.error('Erro de validação para URL válida:', error.errors);
}

try {
  const validatedInvalidURL = urlSchema.parse(invalidURL);
  console.log('URL inválida:', validatedInvalidURL);
} catch (error) {
  console.error('Erro de validação para URL inválida:', error.errors);
}
