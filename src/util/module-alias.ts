import * as path from 'path'
import moduleAlias from 'module-alias'

// Pegamos o diretório que estamos (dirname), voltamos duas pastas e importamos tudo
const files = path.resolve(__dirname, '../..')

// Adicionando encurtadores/apelidos (aliases) de path para src e test
moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
})