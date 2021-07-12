import moduleAlias from 'module-alias'
import path from 'path/posix'

const files = path.resolve(__dirname, '../..')

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test')
})
