<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template name="email" match="email">
	<li>
		<span class="label email">Email</span>
		<span class="card-field email" uid="{@uid}"><xsl:value-of select="."/></span>
	</li>
</xsl:template>
</xsl:stylesheet>
