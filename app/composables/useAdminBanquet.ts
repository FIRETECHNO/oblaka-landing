export const useAdminBanquet = () => {
  const {
    uploading,
    uploadedCount,
    totalFiles,
    successMessage,
    uploadFiles,
    items: menuItems,
    loading: menuLoading,
    error: menuError,
    fetchItems: fetchMenu,
    deleteItem: deleteMenuItem,
    moveItem: moveMenuItem,
    deletingKey,
    movingKey
  } = useAdminPhotos('banquet')

  return {
    uploading,
    uploadedCount,
    totalFiles,
    successMessage,
    uploadFiles,
    menuItems,
    menuLoading,
    menuError,
    fetchMenu,
    deleteMenuItem,
    moveMenuItem,
    deletingKey,
    movingKey,
  }
}
