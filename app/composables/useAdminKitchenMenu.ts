export const useAdminKitchenMenu = () => {
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
  } = useAdminPhotos('kitchen-menu')

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
