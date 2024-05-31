import {
  Alert,
  Box,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  LinearProgress,
  Option,
  Select,
  Stack,
  Table,
  Typography
} from '@mui/joy'
import { useState } from 'react'
import IconifyIcon from 'src/_core/global-components/IconifyIcon'

function labelDisplayedRows({ from, to, count }) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`
}

/**
 * SimpleTable
 * @param {} props: columns, rows, loading, size, variant, rowId, showPagination, sort, page, rowsPerPage
 * @returns
 */
export default function SimpleTable(props) {
  const title = props.title || null
  const columns = props.columns || []
  const rows = props.rows || []
  const loading = props.loading || props.isLoading || false
  const size = props.size || 'sm'
  const variant = props.variant || 'plain'
  const rowId = props.rowId || 'id'
  const showPagination = props.showPagination || false
  const didYouKnow = props.didYouKnow || null
  const align = props.align || 'left'
  const search = props.search || false

  const showActions = props.showActions || false
  const onView = props.onView || (() => {})
  const onEdit = props.onEdit || (() => {})
  const onDelete = props.onDelete || (() => {})
  const loadingDelete = props.loadingDelete || false

  const [sort, setSort] = useState(props.sort || { field: '', direction: '' })
  const [page, setPage] = useState(props.page || 0)
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage || 5)
  const [searchValue, setSearchValue] = useState('')

  const sortedRows = [...rows].sort((a, b) => {
    if (sort.direction === 'asc') {
      return a[sort.field] > b[sort.field] ? 1 : -1
    }
    return a[sort.field] < b[sort.field] ? 1 : -1
  })

  const handleChangePage = newPage => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event, newValue) => {
    setRowsPerPage(parseInt(newValue.toString(), 10))
    setPage(0)
  }

  const getLabelDisplayedRowsTo = () => {
    if (rows.length === -1) {
      return (page + 1) * rowsPerPage
    }
    return rowsPerPage === -1 ? rows.length : Math.min(rows.length, (page + 1) * rowsPerPage)
  }

  return (
    <Box overflow={'hidden'}>
      {didYouKnow && (
        <Alert
          variant='soft'
          color='primary'
          startDecorator={<IconifyIcon icon='fluent:info-24-regular' />}
          sx={{
            borderRadius: 0
          }}
        >
          <strong>Did you know?</strong> {didYouKnow}
        </Alert>
      )}

      {title && (
        <Box
          sx={{
            pl: 1,
            pt: 1
          }}
        >
          {title}
        </Box>
      )}

      {/* Search */}
      {search && (
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'end'}
          gap={1}
          px={1}
        >
          <Input
            placeholder='Search...'
            endDecorator={<IconifyIcon icon='fluent:search-20-regular' />}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </Stack>
      )}

      <Table
        variant={variant}
        size={size}
        sx={{ width: '100%' }}
      >
        <thead>
          <tr>
            {columns.map(column => (
              <th
                key={column.field}
                style={{
                  width: column.width || 'auto',
                  cursor: 'pointer',
                  textAlign: column.align || 'left',
                  paddingLeft: 10,
                  paddingRight: 10
                }}
                onClick={() => {
                  const direction =
                    sort.field === column.field && sort.direction === 'asc' ? 'desc' : 'asc'
                  setSort({ field: column.field, direction })
                }}
              >
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={column.align === 'right' ? 'flex-end' : 'flex-start'}
                  gap={sort.field === column.field ? 1 : 0}
                >
                  {column.headerName}
                  {sort.field === column.field &&
                    (sort.direction === 'asc' ? (
                      <IconifyIcon
                        icon='fluent:arrow-sort-down-lines-16-regular'
                        height={16}
                      />
                    ) : (
                      <IconifyIcon
                        icon='fluent:arrow-sort-up-lines-16-regular'
                        height={16}
                      />
                    ))}
                </Box>
              </th>
            ))}
            {showActions && <th style={{ textAlign: 'right' }}>Actions</th>}
          </tr>
          {loading && (
            <tr>
              <th
                colSpan={columns.length}
                style={{ height: 0 }}
              >
                <LinearProgress />
              </th>
            </tr>
          )}
        </thead>

        <tbody>
          {!loading && sortedRows.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                style={{
                  textAlign: align,
                  padding: '16px'
                }}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  gap={1}
                >
                  <IconifyIcon
                    icon='fluent:emoji-sad-24-regular'
                    height={36}
                  />
                  <Typography level='body-sm'>It's empty in here!</Typography>
                </Box>
              </td>
            </tr>
          )}

          {!loading &&
            sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
              <tr key={row[rowId]}>
                {columns.map(column => (
                  <td
                    key={column.field}
                    style={{
                      textAlign: column.align || 'left',
                      paddingLeft: 10,
                      paddingRight: 10
                    }}
                  >
                    <div
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '200px' // Or any other value
                      }}
                    >
                      {column.render ? column.render(row) : row[column.field]}
                    </div>
                  </td>
                ))}

                {showActions && (
                  <td
                    style={{
                      textAlign: 'right'
                    }}
                  >
                    <Stack
                      direction={'row'}
                      gap={1}
                      alignItems={'center'}
                      justifyContent={'flex-end'}
                    >
                      {/* View/Edit button */}
                      <IconButton
                        size='sm'
                        color='warning'
                        variant='soft'
                        onClick={() => onView(row)}
                      >
                        <IconifyIcon icon='fluent:eye-20-regular' />
                      </IconButton>

                      {/* Delete Button */}
                      <IconButton
                        size='sm'
                        color='danger'
                        variant='soft'
                        onClick={() => onDelete(row)}
                        loading={loadingDelete}
                      >
                        <IconifyIcon icon='fluent:delete-20-regular' />
                      </IconButton>
                    </Stack>
                  </td>
                )}
              </tr>
            ))}
        </tbody>

        {!loading && (
          <tfoot>
            <tr>
              <td colSpan={columns.length + (showActions ? 1 : 0)}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    justifyContent: 'flex-end'
                  }}
                >
                  <FormControl
                    orientation='horizontal'
                    size='sm'
                  >
                    <FormLabel>Rows per page:</FormLabel>
                    <Select
                      onChange={handleChangeRowsPerPage}
                      value={rowsPerPage}
                    >
                      <Option value={5}>5</Option>
                      <Option value={10}>10</Option>
                      <Option value={25}>25</Option>
                    </Select>
                  </FormControl>
                  <Typography
                    textAlign='center'
                    sx={{ minWidth: 80 }}
                  >
                    {labelDisplayedRows({
                      from: rows.length === 0 ? 0 : page * rowsPerPage + 1,
                      to: getLabelDisplayedRowsTo(),
                      count: rows.length === -1 ? -1 : rows.length
                    })}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      size='sm'
                      color='neutral'
                      variant='outlined'
                      disabled={page === 0}
                      onClick={() => handleChangePage(page - 1)}
                      sx={{ bgcolor: 'background.surface' }}
                    >
                      <IconifyIcon icon='fluent:arrow-left-16-regular' />
                    </IconButton>
                    <IconButton
                      size='sm'
                      color='neutral'
                      variant='outlined'
                      disabled={
                        rows.length !== -1
                          ? page >= Math.ceil(rows.length / rowsPerPage) - 1
                          : false
                      }
                      onClick={() => handleChangePage(page + 1)}
                      sx={{ bgcolor: 'background.surface' }}
                    >
                      <IconifyIcon icon='fluent:arrow-right-16-regular' />
                    </IconButton>
                  </Box>
                </Box>
              </td>
            </tr>
          </tfoot>
        )}
      </Table>
    </Box>
  )
}
