import { MORALISM_VS_GOSPEL } from '@/types/gcbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Heart, ArrowRight } from 'lucide-react';

export function GospelComparison() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Moralism vs. Gospel-Centered
        </h2>
        <p className="text-muted-foreground">
          The critical distinction that transforms Bible study
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Moralism Card */}
        <Card className="border-destructive/30 bg-destructive/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-5 h-5" />
              Moralistic Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium text-foreground mb-1">The Message:</p>
              <p className="text-sm text-muted-foreground italic">
                "{MORALISM_VS_GOSPEL.moralism.approach}"
              </p>
            </div>
            
            <div>
              <p className="font-medium text-foreground mb-2">Outcomes:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <div>
                    <span className="font-medium">When you succeed:</span>
                    <p className="text-muted-foreground">{MORALISM_VS_GOSPEL.moralism.outcomes.success}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <div>
                    <span className="font-medium">When you fail:</span>
                    <p className="text-muted-foreground">{MORALISM_VS_GOSPEL.moralism.outcomes.failure}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-destructive/20">
              <p className="text-xs text-muted-foreground">
                <strong>Focus:</strong> {MORALISM_VS_GOSPEL.moralism.focus}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Motivation:</strong> {MORALISM_VS_GOSPEL.moralism.motivation}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Gospel-Centered Card */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-primary">
              <Heart className="w-5 h-5" />
              Gospel-Centered Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium text-foreground mb-1">The Message:</p>
              <p className="text-sm text-muted-foreground italic">
                "{MORALISM_VS_GOSPEL.gospelCentered.approach}"
              </p>
            </div>
            
            <div>
              <p className="font-medium text-foreground mb-2">Outcomes:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <div>
                    <span className="font-medium">When you succeed:</span>
                    <p className="text-muted-foreground">{MORALISM_VS_GOSPEL.gospelCentered.outcomes.success}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <div>
                    <span className="font-medium">When you fail:</span>
                    <p className="text-muted-foreground">{MORALISM_VS_GOSPEL.gospelCentered.outcomes.failure}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-primary/20">
              <p className="text-xs text-muted-foreground">
                <strong>Focus:</strong> {MORALISM_VS_GOSPEL.gospelCentered.focus}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Motivation:</strong> {MORALISM_VS_GOSPEL.gospelCentered.motivation}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Application Pattern */}
      <Card className="border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-center">
            The Universal Application Pattern
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            {MORALISM_VS_GOSPEL.applicationPattern.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                  {step}
                </span>
                {index < MORALISM_VS_GOSPEL.applicationPattern.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
