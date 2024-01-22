package handlers

import "github.com/gin-gonic/gin"

func GetRouter() *gin.Engine {
	router := gin.Default()
	router.GET("/languages/list", getLanguages)
	return router
}
