# Railway Deployment Guide - The Crafted Hospitality

## 🚀 Complete Railway Deployment Setup

This guide provides step-by-step instructions for deploying The Crafted Hospitality Next.js application to Railway.

## Prerequisites ✅

Before starting the deployment:

- [x] GitHub repository with committed code
- [x] Railway account created
- [x] Domain `thecraftedhospitality.com` ready for DNS configuration
- [x] Next.js application tested locally and building successfully

## Step 1: Railway Project Setup

### 1.1 Create New Railway Project

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose the `thecraftedhospitality.com` repository
5. Select the `master` branch for production deployment

### 1.2 Configure Service Settings

1. Railway will auto-detect the Next.js application
2. Verify build command: `npm run build`
3. Verify start command: `npm run start`
4. Confirm Node.js environment is detected

## Step 2: Environment Variables Configuration

### 2.1 Required Variables

Set these in Railway service **Variables** tab:

```env
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://thecraftedhospitality.com
NEXT_PUBLIC_SITE_NAME=The Crafted Hospitality
```

### 2.2 Railway Dashboard Steps

1. Navigate to your Railway service
2. Click **"Variables"** tab
3. Add each variable:
   - **Variable Name**: `NODE_ENV`
   - **Value**: `production`
   - Click **"Add"**
4. Repeat for all required variables

## Step 3: Domain Configuration

### 3.1 Add Custom Domain

1. In Railway service, go to **"Settings"** tab
2. Scroll to **"Domains"** section
3. Click **"Add Domain"**
4. Enter: `thecraftedhospitality.com`
5. Click **"Add Domain"**

### 3.2 DNS Configuration

Railway will provide DNS instructions. Typically:

**For root domain (thecraftedhospitality.com):**
```
Type: A
Name: @
Value: [Railway IP address]
TTL: 300
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [Railway domain].railway.app
TTL: 300
```

### 3.3 SSL Certificate

Railway automatically provisions SSL certificates for custom domains. This process takes 5-15 minutes after DNS propagation.

## Step 4: Deploy Application

### 4.1 Trigger Deployment

1. Railway will automatically deploy after repository connection
2. Monitor deployment in the **"Deployments"** tab
3. Check build logs for any errors

### 4.2 Deployment Validation

Expected build output:
```
✓ Collecting buildpack
✓ Installing dependencies (npm install)
✓ Building application (npm run build)
✓ Starting application (npm run start)
✓ Deployment successful
```

## Step 5: Post-Deployment Verification

### 5.1 Application Health Check

1. Visit `https://thecraftedhospitality.com`
2. Verify the homepage loads correctly
3. Check browser console for errors
4. Test responsive design on mobile devices

### 5.2 Performance Validation

Run these checks:

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

Expected metrics:
- **Performance Score**: 90+
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### 5.3 SEO Verification

1. Check meta tags in page source
2. Verify Open Graph tags for social sharing
3. Test robots.txt accessibility: `/robots.txt`
4. Validate structured data (when implemented)

## Step 6: Monitoring & Maintenance

### 6.1 Railway Monitoring

Monitor through Railway dashboard:
- **Resource usage** (CPU, Memory, Network)
- **Request volume** and response times
- **Error logs** and application logs
- **Deployment history**

### 6.2 Set Up Alerts

Configure Railway alerts for:
- High error rates
- Resource usage spikes
- Deployment failures
- Domain/SSL issues

## Step 7: Continuous Deployment Setup

### 7.1 Branch Configuration

- **Production**: `master` branch → `thecraftedhospitality.com`
- **Staging** (optional): `develop` branch → staging subdomain

### 7.2 Automatic Deployments

Railway automatically deploys when:
1. New commits are pushed to configured branch
2. Pull requests are merged
3. Manual redeploy is triggered

### 7.3 Rollback Procedure

If deployment issues occur:
1. Go to **"Deployments"** tab in Railway
2. Find the last working deployment
3. Click **"Redeploy"** on that version
4. Verify rollback is successful

## Troubleshooting Common Issues

### Build Failures

**Issue**: `npm run build` fails
- Check `package.json` scripts
- Verify all dependencies are in `dependencies` (not just `devDependencies`)
- Review build logs for specific errors

**Issue**: TypeScript compilation errors
- Run `npm run type-check` locally
- Fix type errors before deploying

### Runtime Errors

**Issue**: Application won't start
- Verify start command uses `$PORT` variable
- Check that all environment variables are set
- Review runtime logs in Railway

**Issue**: 404 errors on pages
- Ensure Next.js static generation completed
- Check `next.config.js` for output configuration

### Domain Issues

**Issue**: Domain not resolving
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check domain registrar settings

**Issue**: SSL certificate not working
- Ensure DNS is propagated first
- Contact Railway support if certificate doesn't auto-provision

## Security Checklist

- [x] Environment variables set (not committed to repository)
- [x] SSL certificate active and valid
- [x] Security headers configured in `next.config.js`
- [x] No sensitive data in client-side code
- [x] API routes protected (when implemented)

## Performance Optimization Checklist

- [x] Image optimization enabled
- [x] Static generation for all possible pages
- [x] Bundle size optimized (< 150kB first load)
- [x] Core Web Vitals monitoring active
- [x] CDN caching configured through Railway

## Next Steps After Deployment

1. **Set up Google Analytics** (when implemented)
2. **Configure Google Search Console**
3. **Submit sitemap** to search engines
4. **Set up uptime monitoring** (UptimeRobot, etc.)
5. **Plan content development** strategy

---

## Quick Reference Commands

### Railway CLI (if installed)

```bash
# Login to Railway
railway login

# Link to project
railway link

# Set environment variables
railway variables set NODE_ENV=production
railway variables set NEXT_PUBLIC_BASE_URL=https://thecraftedhospitality.com

# View logs
railway logs

# Open service in browser
railway open
```

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm run start

# Run all quality checks
npm run lint && npm run type-check && npm run format:check
```

---

**Deployment Status**: ✅ Ready for Railway  
**Last Updated**: January 2025  
**Next Phase**: Content Development 