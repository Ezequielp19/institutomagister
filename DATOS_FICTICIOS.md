# Datos Ficticios - Instituto Académico Premier

Esta es una guía para reemplazar los datos ficticios con la información real de tu institución.

## Información de la Institución

### Navbar & General
- **Nombre**: Instituto Académico Premier → `Tu Nombre de Instituto`
- **Logo**: IA (letras) → Tu logo

### Hero Section
- **Título**: "Excelencia Académica desde 1998" → Tu año de fundación
- **Subtítulo**: "Formamos estudiantes con valores" → Tu lema
- **Descripción**: Texto de bienvenida personalizado
- **WhatsApp Link**: `https://wa.me/541123456789?text=...` → Tu número de WhatsApp

### About Section
- **Historia**: Texto sobre tu institución (año 1998)
- **Misión**: Tu misión educativa
- **Valores**: Editar los 4 valores mostrados
- **Datos de interés**: 
  - 25+ años → Tus años de experiencia
  - 3000+ estudiantes → Tus egresados
  - 50+ profesores → Tu cantidad de docentes

## Contacto

### Información de Contacto
- **Teléfono**: (011) 1234-5678 → Tu teléfono real
- **Email**: info@instituopremier.edu.ar → Tu email
- **Ubicación**: 
  - Calle: Av. Rivadavia 1234
  - Ciudad: Buenos Aires, Argentina
- **Horarios**:
  - Lunes - Viernes: 8:00 - 18:00
  - Sábados: 9:00 - 13:00
  - Domingos: Cerrado

### Redes Sociales (Footer)
- Facebook: `#` → Tu URL de Facebook
- Instagram: `#` → Tu URL de Instagram
- Twitter: `#` → Tu URL de Twitter
- LinkedIn: `#` → Tu URL de LinkedIn

## Archivos a Editar

1. **components/navbar.tsx**
   - Nombre y logo de la institución

2. **components/hero.tsx**
   - Títulos, descripción y link de WhatsApp

3. **components/about.tsx**
   - Historia, misión y valores
   - Datos numéricos

4. **components/contact.tsx**
   - Teléfono, email, ubicación y horarios
   - Link de WhatsApp (aparece dos veces)

5. **components/footer.tsx**
   - Descripción y links a redes sociales

6. **app/layout.tsx** (ya actualizado)
   - Title y description para SEO

## Cambios de Diseño

### Colores (si deseas cambiarlos)
Edita `/app/globals.css`:
- **Primary (Azul)**: `210 95% 35%`
- **Accent (Amarillo)**: `42 100% 50%`
- **Secondary**: `200 30% 92%`

### Imagen del Banner
La imagen se encuentra en `/public/banner.jpg`
Puedes reemplazarla con una foto real de tu institución.

## Próximos Pasos

1. Reemplaza todos los datos ficticios con información real
2. Actualiza el banner.jpg con fotos de tu institución
3. Añade más secciones si lo necesitas (programas, galería, testimonios, etc.)
4. Configura el formulario de contacto para que realmente envíe emails
5. Sube la web a producción
